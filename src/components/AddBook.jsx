import React from 'react'
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import cancel from '../assets/cancel1.png'

import "./AddBook.css"
import BookService from '../service/BookService';

export default function () {

    let [bookDetails, setBookDetails] = useState({
        bookName: "",
        authorName: "",
        description: "",
        logo: "",
        price: "",
        quantity: ""

    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBookDetails({ ...bookDetails, [name]: value });
        console.log(bookDetails);
    };

    const addBook = (event) => {
        event.preventDefault();
        let bookData = {
            bookName: bookDetails.bookName,
            authorName: bookDetails.authorName,
            description: bookDetails.description,
            logo: bookDetails.logo,
            price: bookDetails.price,
            quantity: bookDetails.quantity

        };
        console.log("from add book method")
        console.log(bookData)

        BookService.addNewBook(bookData).then((response) => {
            console.log("Added" + response)
            alert("Book added successfully...");
        }).catch((response) => {
            console.log(response)
            alert(response.response.data.data);
        });

    };


    return (
        <div>
          


            <div className="form-content-book">
                <form className="form-book" action="#"onSubmit={addBook}>

                    <div className="form-head-content-book">
                        <div className="form-head-book">Add Book
                            <Link to="/home" >
                                <img className="rounded-full" src={cancel} style={{ height: "20px"  }} />
                            </Link>

                        </div>
                    </div>


                    <div className="row-content-book">
                        {/* BOOK NAME */}
                        <TextField
                            className="input-book"
                            type="text"
                            id="bname"
                            name="bookName"
                            placeholder="Enter your book name"
                            value={bookDetails.bookName}
                            onChange={handleInput}
                            label="Book Name"
                            required

                        />
                        {/* AUTHOR NAME */}
                        <TextField
                            className="input-book"
                            type="text"
                            id="aname"
                            name="authorName"
                            placeholder="Enter author Name"
                            value={bookDetails.authorName}
                            onChange={handleInput}
                            label="Author Name"
                            required
                        />
                    </div>

                    <div className="row-content-book">

                        {/* DISCRIPTION */}
                        <TextField
                            className="input-book"
                            id="outlined-multiline-flexible"
                            label="Discription"
                            multiline
                            maxRows={4}
                            name="description"
                            placeholder="Enter description"
                            value={bookDetails.description}
                            onChange={handleInput}
                        />

                        <TextField
                            className="input-book"
                            type="text"
                            id="logo"
                            name="logo"

                            value={bookDetails.logo}
                            onChange={handleInput}
                            label="Logo"
                            required
                        />
                    </div>

                    <div className="row-content-book">

                        {/* PRICE */}

                        <TextField
                            className="input-reg"
                            type="text"
                            name="price"
                            id="price"
                            placeholder="price"
                            label="price"
                            required
                            value={bookDetails.price}
                            onChange={handleInput} />

                        {/* QUANTITY */}

                        <TextField id="quantity"
                            type="text"
                            className="input-book"
                            name="quantity"
                            placeholder="quantity"
                            label="quantity"
                            required
                            value={bookDetails.quantity}
                            onChange={handleInput} />
                    </div>

                    {/* BUTTONS */}
                    <div >
                        <button type="submit" className="button" id="button" > Add Book </button>
                    </div>
                </form>
            </div>


        </div>
    )
}
