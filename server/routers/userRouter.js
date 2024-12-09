

import express from 'express'
import { userSignUp,userSignIn} from '../controllers/userController.js' 
import {profileUpload,uploadMiddleware}from '../controllers/imgaeUpload.js'
const userRoute=express()

userRoute.post("/user-signup",userSignUp)
userRoute.post("/user-signin",userSignIn)
userRoute.post('/user-profile-img',uploadMiddleware,profileUpload)
export default userRoute