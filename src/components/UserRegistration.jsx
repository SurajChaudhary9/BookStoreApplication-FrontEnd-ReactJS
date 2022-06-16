import React, { useState } from 'react'
import UserService from '../service/UserService';

const Signup = () => {

  const [user, setUser] = useState({
   "id":"",
    "firstName": "",
    "lastName": "",
    "kyc": "",
    "dateOfBirth": "",
    "phoneNumber": "",
    "email": "",
    "password": ""

  });
  const handleChange = (e) => {
    const value =e.target.value;
    setUser({...user, [e.target.name]: value});

  };

  const saveUser =(e) => {
    e.preventDefault();
    UserService.saveUser(user)
    .then((response) => {
      console.log(response);
  })
  .catch((error) => {
    console.log(error);

  });
};
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
    <div className="px-8 py-8">
      <div className="font-thin text-2xl tracking-wider">
        <h1>User Registration</h1>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-medium">{}
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-medium">
            Know your customer ( kyc )
          </label>
          <input
            type="text"
            name="kyc"
            value={user.kyc}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-medium">
            D.O.B.
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={user.dateOfBirth}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-medium">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={(e) => handleChange(e)}
            placeholder="(+91) 7XXXXXXXX0"
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-medium">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
            placeholder='surajchaudhary09@rediffmail.com'
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
          onClick={saveUser}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Submit
          </button>
          <button
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Reset
          </button>
        </div>
        </div>
    </div>
  )
}

export default Signup