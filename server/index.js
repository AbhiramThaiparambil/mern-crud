import express from 'express'
import cors from 'cors'
import userRoute from './routers/userRouter.js'
import bodyParser from 'body-parser'

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', userRoute)





app.listen(3000, () => {
    console.log("http://localhost:3000/");

})
