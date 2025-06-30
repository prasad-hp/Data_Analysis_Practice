import mongoose from "mongoose";
import { MONGODB } from "../.config"



mongoose.connect(MONGODB)

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const User = mongoose.model("User", userSchema)

export { User }