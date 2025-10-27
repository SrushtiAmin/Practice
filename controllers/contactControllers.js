// get all contact 
// get api/contact
// access private
const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");
const getContacts = asyncHandler(async(req, res) => {

    const contacts =await Contact.find({user_id: req.user.id});
    res.status(200).json({contacts});
});

// get all contact by id
// get api/contact/:id
// access private

const getContact = asyncHandler(async(req, res) => {
  const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({ contact });
});

// create contact 
// post api/contact
// access private

const createContact = asyncHandler(async(req, res) => {
    console.log("The request body is:", req.body);
    const {name,email,phone} = req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are required");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,
    })

    res.status(201).json({contact});
});

// update contact 
// put api/contact/:id
// access private

const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't matches to   update information")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json({ updatedContact});
});

// delete contact 
// delete api/contact/:id
// access private

const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
 if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't matches to delete information");
    }
    await contact.remove();
    res.status(200).json({contact});
});

module.exports = {getContacts, getContact,createContact,updateContact,deleteContact};