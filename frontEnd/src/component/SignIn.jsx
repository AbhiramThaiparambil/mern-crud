import React,{useState} from "react";

const SignIn = () => {
  return (
    <div className="h-screen w-screen  bg-slate-800 pt-[4%]">
      <div className="dark">
        <div className=" mx-auto w-[600px] h-[600px] backdrop:blur-3xl shadow-[0_0_0_0.25px_white] rounded-t-md  bg-slate-800 p-10 text-white ">
          <h1 className="font-bold  text-center   text text-3xl mt-3">
            Sign in
          </h1>

          <form action="">
            <input
              type="text"
              className="w-full bg-slate-600 py-5 pl-1 shadow-[0_0_0_0.25px_white]   border-white outline-none mt-10  h-9 rounded-sm  "
              placeholder="enter your name"
            />

            <input
              type="email"
              className="w-full bg-slate-600 py-5 pl-1 shadow-[0_0_0_0.25px_white]   border-white outline-none mt-10  h-9 rounded-sm  "
              placeholder="enter your email"
            />

            <input
              type="text"
              className="w-full bg-slate-600 py-5 pl-1 shadow-[0_0_0_0.25px_white]   border-white outline-none mt-10  h-9 rounded-sm  "
              placeholder="enter your password"
            />

            <input
              type="text"
              className="w-full bg-slate-600 py-5 pl-1 shadow-[0_0_0_0.25px_white]   border-white outline-none mt-10  h-9 rounded-sm  "
              placeholder="confirm password"
            />
              
              <p className="mt-5 ml-1 font-semibold cursor-pointer hover:text-slate-600">already have an account</p>
            <button className="px-60 mt-5 p-3 rounded-md bg-slate-600 hover:bg-white hover:text-slate-600">
              sumbit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
