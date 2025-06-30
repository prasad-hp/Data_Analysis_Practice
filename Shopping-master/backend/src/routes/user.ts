import express, { Router, Request, Response } from "express"
import { User } from "../db";

const userRouter:Router = Router();

userRouter.use(express.json());

type UserSignup = {
    firstName : string,
    lastName : string,
    email : string,
    password : string
}

userRouter.post("/signup", async (req: Request, res: Response) => {
    const userData: UserSignup = req.body;
    try {
        const existingUser = await User.findOne({
            email:userData.email
        })
        if(!existingUser){
            return res.status(400).json({message:"Email already used for registering"})
        }
        const createUser = await User.create(userData)
        if(!createUser){
            return res.status(500).json({message:"An Error occured"})
        }
        res.status(200).json({message:"User Created Successfully"})
    } catch (error) {
        console.error("Error in User Signup", error)
        res.status(500).json({message:"An error Occured"})
    }
})

export default userRouter;