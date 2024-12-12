import React, { useState ,useEffect} from "react";
import Profile from "./Profile";

import { useDispatch,useSelector} from "react-redux";

import useUserData from "../../utils/useUserData";
const Home = () => {
  const user=useSelector((state)=>state.user)
  const [profile, setProfile] = useState(false);


  useUserData()
  


  return (
<>  
    <div className="bg-slate-800 p-3 pt-4 h-screen text-white relative" >
      <div className="h-24  bg-slate-800 shadow-2xl border-[0.5px] border-white flex justify-between z-50">
        <div className="w-56 ml-28 mt-8">
          
           <h1 className="font-serif text-2xl">User Dashboard</h1>
          </div>{" "}
        <div className="w-40 h-24 -mr-16 p-2 flex">
         

<div className="w-[78px] h-[78px]   rounded-full  overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img 
             onClick={() => setProfile(!profile)}
             src={user?.profileImage ||" https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg" }
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        </div>
      </div>
      <div className="absolute mt-5">

      </div>
      {profile && <Profile />}
    </div>
    </>
  );
};

export default Home;
