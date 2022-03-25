import React from 'react'
import { useState } from 'react';
import { Footer, Hero } from "../../components";
const SignupPage=()=> {

  const [userDetails, setUserDetails]=useState([])

  

  return (
    <div>
      <Hero />
      <div className="user-details">
        <form method="post" action="/users">
          Name:
          <br />
          <input type="text" name="name" />
          <br />
          Email:
          <br />
          <input type="text" name="email" />
          <br />
          Password:
          <br />
          <input type="password" name="password" />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
      <Footer />
    </div>
  );
}
export{SignupPage}