
import { ServerUrl } from "./constant";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import React,{useEffect} from 'react'






  
  const useUserData = () => {

    const dispatch=useDispatch()

    const getData=async ()=>{
      
      try {
          const token=localStorage.getItem('token')
  
         const res= await axios.post(ServerUrl+'/user-home',{
                "token":token
          })
  
          console.log(res);
          dispatch(addUser(res.data))       
   
      } catch (error) {
             console.log(error);
             
       }
    }

    useEffect(()=>{
 
   
      getData()
  
      
  },[])

    return 
  }
  
  export default useUserData
  
