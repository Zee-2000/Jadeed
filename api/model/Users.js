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
//register encryption
userSchema.pre("save", async function(next)
{
    if(!this.password.isModified(password))
    {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
module.exports = mongoose.model("User", userSchema);