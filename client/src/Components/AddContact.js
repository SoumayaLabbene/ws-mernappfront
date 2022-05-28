import { Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../Redux/actions/contacts'

const AddContact = () => {
  const dispatch = useDispatch()
  const [newContact, setNewContact] = useState([])
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value })
  }
  const handleContact = () => {
    dispatch(addContact(newContact))
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={newContact.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <Form.Label>name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={newContact.name}
          placeholder="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleContact}>
        Submit
      </Button>
    </Form>
  )
}

export default AddContact
