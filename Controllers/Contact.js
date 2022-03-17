const Contact = require("../Model/Contact")

exports.AddContact = async(req,res)=>{
    try {
        const NewContact = new Contact(req.body)
        const founded = await Contact.findOne({email : req.body.email})
        if(founded){
            return res.status(400).send('Email already exist')
        }
        await NewContact.save()
        res.status(200).send({NewContact,Msg :'Contact added'})
    } catch (error) {
        res.status(500).send('Could not add contact')
    }
}

exports.GetContact = async (req,res)=>{
    try {
        const Contacts = await Contact.find()
        res.status(200).send({Contacts,Msg:'List of contacts'})
    } catch (error) {
        res.status(500).send('Could not get contacts')
    }
}

exports.DeleteContact = async (req,res)=>{
    try {
        const {id} = req.params
        const DelContact = await Contact.findByIdAndDelete(id)
        res.status(200).send('Contact deleted')
    } catch (error) {
        res.status(500).send('Could not delete')
    }
}

exports.UpdateContact = async(req,res)=>{
    try {
        const {id} = req.params
        const UpContact = await Contact.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send("Contact updated")
    } catch (error) {
        res.status(500).send('Could not update')
    }
}

exports.GetOneContact = async(req,res)=>{
    try {
        const {id} = req.params
        const OneContact = await Contact.findById(id)
        res.status(200).send({OneContact,Msg : 'Contact to find'})
    } catch (error) {
        res.status(500).send('Contact not found')
    }
}