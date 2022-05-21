import { LOAD, ERROR, ALLCONTACTS } from '../types/contacts'

const getAllContacts = () => async (dispatch) => {
  dispatch({ type: LOAD })
  try {
    let res = await axios.get('http://localhost:5005/api/contacts/allContacts')
    dispatch({ type: ALLCONTACTS, payload: res.data.allContacts })
  } catch (err) {
    dispatch({ type: ERROR, err: err.message })
  }
}

const addContact = (newContact) => async (dispatch) => {
  dispatch({ type: LOAD })
  try {
    let res = await axios.post(
      'http://localhost:5005/api/contacts/addcontact',
      newContact,
    )
    //dispatch({ type: ADDCONTACT, payload: res.data.newContact })
    dispatch(getAllContacts())
  } catch (err) {
    dispatch({ type: ERROR, err: err.message })
  }
}

const editContact = (editedContact) => async (dispatch) => {
  dispatch({ type: LOAD })
  try {
    let res = await axios.put(
      'http://localhost:5005/api/contacts/editcontact',
      editedContact,
    )
    //dispatch({ type: ADDCONTACT, payload: res.data.editedContact })
    dispatch(getAllContacts())
  } catch (err) {
    dispatch({ type: ERROR, err: err.message })
  }
}

const deleteContact = () => async (dispatch) => {
  dispatch({ type: LOAD })
  try {
    let res = await axios.delete(
      'http://localhost:5005/api/contacts/deletecontact',
    )
    //dispatch({ type: ADDCONTACT })
    dispatch(getAllContacts())
  } catch (err) {
    dispatch({ type: ERROR, err: err.message })
  }
}
