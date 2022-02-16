import mongoose from "mongoose";

const postSchema = user.Schema({
    name: String,
    password: String,
})

const UserSchema = mongoose.model('UserSchema', postSchema);

export default UserSchema

