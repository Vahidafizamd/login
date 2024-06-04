const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://mohammadvahidafiza:fiza@cluster0.pirgf19.mongodb.net/login");


// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// collection model
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;
