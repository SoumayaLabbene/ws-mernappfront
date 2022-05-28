import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllContacts } from '../Redux/actions/contacts'
import Contact from './Contact'

const ContactList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllContacts())
  }, [dispatch])
  const contacts = useSelector((state) => state.contactReducer.contacts)
  const isLoad = useSelector((state) => state.contactReducer.isLoad)
  return (
    <div>
      {isLoad ? (
        <h1>Loading...</h1>
      ) : (
        contacts.map((contact) => (
          <Contact contact={contact} key={contact._id} />
        ))
      )}
    </div>
  )
}

export default ContactList
