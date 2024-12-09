import express from 'express'
import cors from 'cors'
import userRoute from './routers/userRouter.js'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import "dotenv/config"
import path from 'path'
import { fileURLToPath } from "url";

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, '/public')));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', userRoute)


mongoose.connect(process.env.DBURL,).then(()=>{
    console.log('db connection successfully');
    
}).catch((e)=>{
    console.log(e);
    
})



app.listen(3000, () => {
    console.log("http://localhost:3000/");
    console.log(process.env.DBURL);
    

})
