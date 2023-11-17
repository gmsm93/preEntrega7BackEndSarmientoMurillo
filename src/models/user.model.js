import mongoose from "mongoose";

const UserModel = mongoose.model('users', new mongoose.Schema({
    email:{
        type: String, 
        unique: true
    },
    password: String,
    first_name: String,
    last_name: String    
}))

export default UserModel