const express = require('express')
const router = express.Router()
const {getAllContacts,addContact,updateContacts,deleteContacts} = require('../controllers/contactControllers')

//get
router.get('/allcontacts',getAllContacts)



//post
router.post('/addcontact',addContact)




//Put
router.put('/editcontact',updateContacts)




//delete
router.delete('/deletecontact',deleteContacts)



module.exports = router