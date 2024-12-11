

import express from 'express'
import { userSignUp, userSignIn ,userHome,editProfile} from '../controllers/userController.js'
import { profileUpload, uploadMiddleware } from '../controllers/imgaeUpload.js'
const userRoute = express()

userRoute.post("/user-signup", userSignUp)
userRoute.post("/user-signin", userSignIn)
userRoute.post('/user-home',userHome) //get data 
userRoute.post('/user-profile-img', uploadMiddleware, profileUpload)
userRoute.patch('/user-edit',editProfile)
export default userRoute