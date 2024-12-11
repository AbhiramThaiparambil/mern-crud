import React, { useState ,useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import { ServerUrl } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
const Home = () => {
  const [profile, setProfile] = useState(false);
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

  return (

    <div className="bg-slate-800 p-3 pt-4 h-screen text-white relative" >
      <div className="h-24  bg-slate-800 shadow-2xl border-[0.5px] border-white flex justify-between z-50">
        <div className="w-56"></div>{" "}
        <div className="w-40 h-24 bg-slate-400 flex">
          <img
            className="rounded-full ml-5  mt-[6px] h-[78px] cursor-pointer hover:opacity-70"
            onClick={() => setProfile(!profile)}
            src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg"
            alt=""
          />
  <button className="h-8 w-80  bg-red-500  " onClick={()=>{localStorage.clear(); window.location.reload()}}>Log-out</button>
        </div>
      </div>
      <div className="absolute">
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      </div>
      {profile && <Profile />}
    </div>
  );
};

export default Home;
