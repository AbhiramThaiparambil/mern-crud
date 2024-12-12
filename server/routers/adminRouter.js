
import express from 'express'
import { adminSignin, getUsers, editUsers, userToAdmin, adminToUser, deleteUser } from '../controllers/adminController.js'
const adminRouter = express()

adminRouter.post('/admin-signin', adminSignin)
adminRouter.post('/admin-getusers', getUsers)
adminRouter.post('/admin-edit', editUsers);
adminRouter.delete('/delete-user', deleteUser);
adminRouter.patch('/change-user-to-admin', userToAdmin);
adminRouter.patch('/change-admin-to-user', adminToUser);
export default adminRouter