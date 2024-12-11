import User from "../models/userSchema.js";
import { hash, compare } from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
export const userSignUp = async (req, res) => {

   try {

      const { UserName, email, password, profileImage } = req.body

      console.log(profileImage);


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
            profileImage: profileImage
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

            console.log("..............................");

            const token = await jsonwebtoken.sign({ token: user._id }, 'mysecret')

            res.status(201).json({ "user": user, "token": token })
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




export const userHome = async (req, res) => {
   try {
      const token = req.body.token
      if (!token) return res.status(401).json({ error: 'token is not found' });

      const tokenVerified = jsonwebtoken.verify(token, 'mysecret')
      console.log(tokenVerified.token);

      const activeUser = await User.findById(tokenVerified.token)

      res.status(201).json(activeUser)




   } catch (error) {
      console.log(error);

   }
}

export const editProfile = async (req, res) => {
   try {
      console.log('--------------------');

      const { editEmail, editUserName, token } = req.body;

      console.log(editEmail,editUserName, token);


   } catch (error) {

   }
}

