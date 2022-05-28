//Reducer: pure function => this function returns output: modified input
import { LOAD, ERROR, ALLCONTACTS, ONECONTACT } from '../types/contacts'
const initialState = {
  contacts: [],
  isLoad: false,
  isError: false,
  contact: {},
}
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, isLoad: true }
    case ALLCONTACTS:
      return { ...state, isLoad: false, contacts: payload }
    case ONECONTACT:
      return { ...state, isLoad: false, contact: payload }
    case ERROR:
      return { ...state, isError: true, isLoad: false }
    default:
      return state
  }
}

export default contactReducer
