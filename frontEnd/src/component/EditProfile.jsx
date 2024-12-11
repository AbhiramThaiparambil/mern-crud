import React, { useRef } from "react";
import axios from "axios";
import { ServerUrl } from "../utils/constant";
const EditProfile = () => {
  const editEmail = useRef();
  const editUserName = useRef();

  const handileSumbit = async (e) => {
    try {
      e.preventDefault();
      alert("hoi");
      const  userName= editUserName.current.value;
      const  email= editEmail.current.value;
      const token = localStorage.getItem("token");
  
      
      const response = await axios.patch(ServerUrl + "/user-edit", {
        editUserName:userName,
        editEmail:email,
        token,
      });
    } catch (error) {}
  };

  return (
    <div className=" mx-auto w-[550px] h-[500px] backdrop:blur-3xl shadow-[0_0_0_0.25px_white] rounded-t-md  bg-slate-800 p-10 pt-4 text-white ">
      <h1 className="font-bold  text-center   text text-3xl mt-3"></h1>

      <form onSubmit={(e) => handileSumbit(e)}>
        <div className="w-24 h-24 rounded-full mt-1 mx-auto flex  bg-slate-600 ">
          <input type="file" accept="image/*" className="hidden" />

          <div className="">
            <img className="object-cover rounded-full   w-24 h-24  " alt="" />
          </div>
        </div>

        <div className="mt-8"></div>

        <input
          type="text"
          ref={editUserName}
          className="w-full bg-slate-600 py-5 pl-1 shadow-[0_0_0_0.25px_white]   border-white outline-none mt-5  h-9 rounded-sm  "
          placeholder="enter your name"
        />

        <input
          type="email"
          ref={editEmail}
          className="w-full bg-slate-600 py-5 pl-1 shadow-[0_0_0_0.25px_white]    border-white outline-none mt-10  h-9 rounded-sm  "
          placeholder="enter your email"
        />

        <input
          type="password"
          className="w-full bg-slate-600 py-5 pl-1 shadow-[0_0_0_0.25px_white]   border-white outline-none mt-10  h-9 rounded-sm  "
          placeholder="enter your password"
        />

        <div className="flex justify-between">
          <span
            className="mt-5 ml-1 font-semibold cursor-pointer hover:text-slate-600 flex "
            onClick={() => setIsSignIn(!isSignIn)}
          ></span>
        </div>
        <button className="px-52 mt-5 p-3 rounded-md bg-slate-600 hover:bg-white hover:text-slate-600">
          sumbit
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
