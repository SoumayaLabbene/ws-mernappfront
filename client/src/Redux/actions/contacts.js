import { LOAD, ERROR, ALLCONTACTS, ONECONTACT } from '../types/contacts'
import axios from 'axios'

export const getAllContacts = () => async (dispatch) => {
  dispatch({ type: LOAD })
  try {
    let res = await axios.get('http://localhost:5001/api/contacts/allcontacts')
    dispatch({ type: ALLCONTACTS, payload: res.data.allContacts })
  } catch (err) {
    dispatch({ type: ERROR, err: err.message })
  }
}

export const getOneContact = (id) => async (dispatch) => {
  dispatch({ type: LOAD })
  try {
    let res = await axios.get(
      `http://localhost:5001/api/contacts/onecontact/${id}`,
    )
    dispatch({ type: ONECONTACT, payload: res.data.oneContact })
  } catch (err) {
    dispatch({ type: ERROR, err: err.message })
  }
}

export const addContact = (newContact) => async (dispatch) => {
  dispatch({ type: LOAD })
  try {
    await axios.post(
      'http://localhost:5001/api/contacts/addcontact',
      newContact,
    )
    //dispatch({ type: ADDCONTACT, payload: res.data.newContact })
    dispatch(getAllContacts())
  } catch (err) {
    dispatch({ type: ERROR, err: err.message })
  }
}

export const editContact = (editedContact, id) => async (dispatch) => {
  dispatch({ type: LOAD })
  try {
    await axios.put(
      `http://localhost:5001/api/contacts/editcontact/${id}`,
      editedContact,
    )
    //dispatch({ type: ADDCONTACT, payload: res.data.editedContact })
    dispatch(getAllContacts())
  } catch (err) {
    dispatch({ type: ERROR, err: err.message })
  }
}

export const deleteContact = (id) => async (dispatch) => {
  dispatch({ type: LOAD })
  try {
    await axios.delete(`http://localhost:5001/api/contacts/deletecontact/${id}`)
    //dispatch({ type: ADDCONTACT })
    dispatch(getAllContacts())
  } catch (err) {
    dispatch({ type: ERROR, err: err.message })
  }
}
