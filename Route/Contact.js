const express = require("express")
const { AddContact, GetContact, DeleteContact, UpdateContact, GetOneContact } = require("../Controllers/Contact")
const Contact = require("../Model/Contact")



const ContactRouter = express.Router()


ContactRouter.post('/AddContact',AddContact)

ContactRouter.get('/GetContacts',GetContact)

ContactRouter.delete('/DeleteContact/:id',DeleteContact)

ContactRouter.put('/UpdateContact/:id',UpdateContact)

ContactRouter.get('/GetOneContact/:id',GetOneContact)

module.exports = ContactRouter