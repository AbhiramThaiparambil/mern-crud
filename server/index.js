import express from 'express'
import cors from 'cors'
const app=express()

app.listen(3000,()=>{
    console.log("http://localhost:3000/");
     
})

app.use(cors());

app.get('/sample',(req,res)=>{
    res.send('sample data.huhihsduihf')
})

