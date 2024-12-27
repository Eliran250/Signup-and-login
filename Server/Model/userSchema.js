const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name require"],
    },
    email:{
        type: String,
        required: [true,"Email require"],
        unique: [true,"The email already used"],
    },
    password:{
        type: String,
        required: [true,"Passoword require"],
    },
})
module.exports = mongoose.model("user", userSchema);