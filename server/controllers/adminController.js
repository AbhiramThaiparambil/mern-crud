

import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
export const adminSignin = async (req, res) => {
  try {

    const { email, password } = req.body

    console.log(email);
    console.log(password);


    const admin = await User.findOne({ email: email })
    console.log(admin);

    if (!admin || !admin.isAdmin) return res.status(401).json({ message: "Admin not found" })

    if (admin) {
      const adminToken = await jwt.sign({ adminToken: admin._id }, 'adminSecret')
      res.status(201).send({ "adminToken": adminToken })
    }


  } catch (error) {

  }
}

export const getUsers =async (req,res)=>{
 try {
  
  const adminToken=req.body.adminToken
  console.log(adminToken);
  
  
     const valid =await   jwt.verify(adminToken,'adminSecret')
       if(valid.adminToken){
         const allUsers= await User.find();
         res.status(201).json(allUsers);
       }
       

 } catch (error) {
  console.log(error);
  
 }
}

export const editUsers = async (req,res)=>{
  try {
   const  {userId,editName,editEmail}=req.body

   console.log(userId);
   console.log(editName);
   
    const isUpdated=await User.updateOne({_id:userId},{$set:{userName:editName,email:editEmail}})

    if(isUpdated){
      res.status(201).json({message:"User updated successfully."})
    }else{
      return res.status(404).json({ message: "User not found or no changes made." });

    }
    
  } catch (error) {
    
  }
}


export const adminToUser = async (req,res)=>{
  try {
   const  {userId}=req.body

   const isUpdated=await User.updateOne({_id:userId},{$set:{isAdmin:false}})

   if(isUpdated){
     res.status(201).json({message:"admin to user"})
   }else{
     return res.status(404).json({ message: "User not found or no changes made." });

   }

   
     
  } catch (error) {
    
  }
}

export const userToAdmin = async (req,res)=>{
  try {
   const  {userId}=req.body
   console.log('userto Admin');

   
   const isUpdated=await User.updateOne({_id:userId},{$set:{isAdmin:true}})

   if(isUpdated){
     res.status(201).json({message:"user to admin"})
   }else{
     return res.status(404).json({ message: "User not found or no changes made." });

   }

   
   
   
     
  } catch (error) {
    
  }
}

export const deleteUser = async (req,res)=>{
  try {
   const  {userId}=req.body

   console.log(userId);
   console.log('delete user');
   
   
     
  } catch (error) {
    
  }
}
