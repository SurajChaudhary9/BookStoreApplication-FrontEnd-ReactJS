
import { Link } from "react-router-dom";
import "./Book.css"

import { useState } from "react";
import React, { useEffect } from "react";

import Card from "./Card";
import BookService from "../service/BookService";

export default function () {

    const [bookDetails, setBookDetails] = useState([]);

    useEffect(() => {
        fetchBookDetails();
    });

    function fetchBookDetails() {


        BookService.getAllBooks()
            .then((response) => {
                setBookDetails(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>

         

            <h1><center>welcome !!!!!</center></h1>


            {/* <div className ="bookCard">
                <div className="card__body">
                    <div className="card__image__container">
                        <img
                            className="card__image"
                            src="../Image 8.png"
                            alt=""
                        />
                    </div>
                    <div className="card__title__author">
                        <h2 className="card__title">BOOK NAME</h2>
                        <span className="card__author">by author name</span>
                    </div>
                    <span className="card__price">Rs.1500</span>

                </div>
                <div className="card__button">
                    <button className="card__add_button">ADD TO BAG</button>
                    <button className="card__wishlist_button">WISHLIST</button>
                </div>

            </div> */}

            <div className="wrapper">
                {bookDetails.map((book) => {
                    return (
                        <Card
                            image={book.logo}
                            title={book.bookName}
                            description={book.description}
                            quantity={book.quantity}
                            id={book.bookId}
                            price={book.price}
                            author={book.authorName}
                        />
                    );
                })}
            </div>
        </div>
    )
}
