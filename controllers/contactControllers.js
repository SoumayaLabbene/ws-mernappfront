const contact = require('../models/Contact')

exports.addContact = async (req, res) => {
  try {
    // email unique
    const findContact = await contact.findOne({ email: req.body.email })
    if (findContact) {
      //res : input
      return res.status(400).send({ msg: 'email already exists', findContact })
    }
    const newContact = new contact(req.body)
    await newContact.save()
    res.status(200).send({ msg: 'contact added succesfully', newContact })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getAllContacts = async (req, res) => {
  try {
    const allContacts = await contact.find()
    res.status(200).send({ msg: 'all contacts : ', allContacts })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getOneContact = async (req, res) => {
  try {
    const oneContact = await contact.findOne({ _id: req.params.id })
    res.status(200).send({ msg: 'one contact : ', oneContact })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.updateContact = async (req, res) => {
  try {
    const editedContact = await contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } },
    )
    res.status(200).send({ msg: 'contact edited ', editedContact })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.deleteContact = async (req, res) => {
  try {
    const deletedcontact = await contact.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: 'contact deleted ' })
  } catch (err) {
    res.status(500).send(err)
  }
}
