import React, { useState } from "react";
import { User, Edit, LogOut } from "lucide-react";
import { useSelector } from "react-redux";
import EditProfile from "./editProfile";

const Profile = () => {
    const [isEdit,setEdit]=useState(false)
    const user=useSelector((state)=>state.user)
    console.log(user);
    
  return (
    <div className="backdrop-blur-sm  mt-28 z-10 absolute inset-0">
    <div className="w-[400px] bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl rounded-2xl border border-slate-700 p-6 text-center absolute right-0 top-1/2 transform -translate-y-1/2 -mt-36 mr-16">
    <div className="relative mb-4">
        <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-white/20 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img 
            src= "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0">
          <button 
            className="bg-slate-700 text-white p-2 rounded-full hover:bg-slate-600 transition-colors"
            aria-label="Edit Profile"
          >
            <Edit size={16} />
          </button>
        </div>
      </div>

      <div className="text-white mb-6">
        <h2 className="text-2xl font-bold text-white/90 mb-2">{user.userName}</h2>
        <p className="text-slate-400 text-sm">{user.email}</p>
      </div>

      <div className="flex justify-center space-x-4">
        <button 
        onClick={()=>setEdit(!isEdit)}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <User className="mr-2" size={18} />
          Edit Profile
        </button>
        <button 
          className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          <LogOut className="mr-2" size={18} />
          Logout
        </button>
      </div>
    </div>
      
     {isEdit && <EditProfile/>}


    </div>


  );
};

export default Profile;
