import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    profileImage:{
        type:String,
        default:'no img'
    }
})

const User = mongoose.model("User", userSchema);

export default User