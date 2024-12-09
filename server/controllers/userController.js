import User from "../models/userSchema.js";
import { hash, compare } from 'bcrypt'

export const userSignUp = async (req, res) => {

   try {

      const { UserName, email, password,profileImage } = req.body
      console.log('------------------------------------------');

      console.log(profileImage);
      console.log('------------------------------------------');
      
      
      const userisExist = await User.findOne({ email: email })
      if (userisExist) {

         res.status(401).json({ error: 'email is alredy register' })

      } else {
         const saltPass = await hash(password, 10)

         const newUser = new User({
            userName: UserName,
            email: email,
            isAdmin: false,
            password: saltPass,
            profileImage:profileImage
         })
         const saved = await newUser.save()
         if (saved) res.status(201).json({ message: 'user registered successfully' })


      }



   } catch (error) {
      console.log(error);

   }
}

export const userSignIn = async (req, res) => {
   try {
      const { email, password } = req.body
      const user = await User.findOne({ email: email })
      if (user) {
         const match = await compare(password, user.password)
         if (match) {

         } else {
            res.status(401).json({ error: 'password not match' })
         }
      } else {
         res.status(401).json({ error: 'account not found please sign up first' })
      }
   } catch (error) {
      console.log(error);

   }
}




