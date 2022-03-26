const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    email: {
        type:String,
        required: [true, "Email is required"],
        minlength: [10, "You must have a minimum of 10 chacters"]
    }
},{timestamps:true});

const Newsletter = mongoose.model('Newsletter', NewsletterSchema);

module.exports = Newsletter;