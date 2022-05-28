const express = require('express')
const router = express.Router()
const {
  getAllContacts,
  getOneContact,
  addContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactControllers')

//get
router.get('/allcontacts', getAllContacts)
router.get('/onecontact/:id', getOneContact)

//post
router.post('/addcontact', addContact)

//Put
router.put('/editcontact/:id', updateContact)

//delete
router.delete('/deletecontact/:id', deleteContact)

module.exports = router
