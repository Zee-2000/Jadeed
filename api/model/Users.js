const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        email: { type: String, required: true },
        password:{type: String, required:true},
        isAdmin: {type: Boolean, default:false},
    }
);

userSchema.methods.matchPassword = async function(enterPassword)
{
    return await bcrypt.compare(enterPassword, this.password)
}
module.exports = mongoose.model("User", userSchema);