import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../Redux/actions/contacts'

const Contact = ({ contact }) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteContact(contact._id))
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Name : {contact.name} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>email :{contact.email}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="primary">Edit Profile</Button>
      </Card.Body>
    </Card>
  )
}

export default Contact
