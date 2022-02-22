const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Password: { type: String, required: true }, 
    Email: { type: String, required: true}
})
var User = mongoose.model("User", userSchema);
module.exports = User;
