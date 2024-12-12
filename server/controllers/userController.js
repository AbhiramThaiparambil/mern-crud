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
      const { editEmail, editUserName, profileImage, token } = req.body;

      if (token) {
         const tokenVerified = jsonwebtoken.verify(token, 'mysecret');
         const userId = tokenVerified.token;

         console.log(userId);


         if (userId) {
            let updateData = {
               userName: editUserName,
               email: editEmail,
            };

            if (profileImage) {
               updateData.profileImage = profileImage;
            }

            const isUpdated = await User.updateOne({ _id: userId }, { $set: updateData });

            if (isUpdated) {
               const updatedData = await User.findOne({ _id: userId });

               return res.status(201).json({ message: "User profile updated successfully", updatedData: updatedData });
            } else {
               return res.status(400).json({ message: "No changes made to the profile" });
            }
         } else {
            return res.status(400).json({ message: "Invalid token" });
         }
      } else {
         return res.status(400).json({ message: "Token is required" });
      }
   } catch (error) {
      console.log("Error updating profile:", error);
      res.status(500).json({ message: "An error occurred while updating the profile" });
   }
};


export const adminUserEdit = async (req, res) => {
   try {


   } catch (error) {
      console.log(error);

   }
}

