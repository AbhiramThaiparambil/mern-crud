
import express from 'express'
import { adminSignin } from '../controllers/adminController.js'
const adminRouter=express()

// adminRouter.post('/admin-signin',adminSignin)
adminRouter.post('/admin-signin',(req,res)=>{
   console.log('heyyyy');
   
})


export default adminRouter