// get all contact 
// get api/contact
// access public
const asyncHandler = require('express-async-handler')
const getContacts = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Get all the contact" });
});

// get all contact by id
// get api/contact/:id
// access public

const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Get the contact by id" });
});

// create contact 
// post api/contact
// access public

const createContact = asyncHandler(async(req, res) => {
    console.log("The request body is:", req.body);
    const {name,email,phone} = req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are required");
    }
    res.status(201).json({ message: "Create the contact" });
});

// update contact 
// put api/contact/:id
// access public

const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Update the contact" });
});

// delete contact 
// delete api/contact/:id
// access public

const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Delete the contact" });
});

module.exports = {getContacts, getContact,createContact,updateContact,deleteContact};