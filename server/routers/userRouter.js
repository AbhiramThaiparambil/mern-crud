

import express from 'express'
import { userSignUp,userSignIn } from '../controllers/userController.js' 
const userRoute=express()

userRoute.post("/user-signup",userSignUp)
userRoute.post("/user-signin",userSignIn)
export default userRoute