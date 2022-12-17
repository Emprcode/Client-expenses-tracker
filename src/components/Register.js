import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Register = () => {
  return (
    <Form className="  p-5">
    <Form.Group className="mb-3" >
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter your username" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary d-flex justify-content-center" type="submit">
        Submit
      </Button>
  </Form>
  )
}


