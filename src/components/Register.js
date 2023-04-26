import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CustomInputFields } from "../customInputeFields/CustomInputFields";
import { postUser } from "../helper/axiosHelper";

import {  toast } from 'react-toastify';

export const Register = () => {

  const [newUser, setNewUser] = useState({});
  const handleOnChange = (e) => {
    const {name, value} = e.target
   setNewUser({
    ...newUser, [name]:value
   })
  };

  const handleOnSubmit= async(e) => {
    e.preventDefault();
    console.log(e.target)
    const {status, message} =await postUser(newUser);
    toast[status](message);
  }
console.log(newUser)
  const inputeFields = [
    {
      name:"username",
      label:"User Name",
      type:"text",
      required:true,
      placeholder:"tom"
    },
    {
    name:"email",
    label:"Email",
    type:"email",
    required:true,
    placeholder:"Your@email.com"
  },
  {
    name:"password",
    label:"password",
    type:"password",
    required:true,
    placeholder:"*************"
  },
  
]
  return (
    
    <Form className="  p-5" onSubmit={handleOnSubmit}>
      {inputeFields.map((item,i) =>  <CustomInputFields key={i}{...item} onChange={handleOnChange}/>)}
      
      <Button variant="primary d-flex justify-content-center" type="submit">
        Submit
      </Button>
    </Form>
  );
};
