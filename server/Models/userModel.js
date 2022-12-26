import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname : {
            type: String,
            required: true
        },
        isAdmin : {
            type: Boolean,
            default: false,
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        worksIn: String,
        nativeLanguage: String,
        studiesAt: String,
        followers: [] ,
        following: []
    },
    {timestamps: true} //Add two fields to each document
)

const UserModel= mongoose.model("Users", UserSchema); //Importing schema
export default UserModel