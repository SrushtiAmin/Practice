// for schema and values that we require in database 

const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name :{
        type: String,
        required:[true, "Please enter the name of contact"],
    },

    email :{
        type: String,
        required:[true, "Please enter the email of contact"],
    },

    phone:{
        type: String,
        required:[true, "Please enter the number of contact"],
    },
    
},
{
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);