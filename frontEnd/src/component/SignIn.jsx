import React, { useState, useRef } from "react";
import validation from "../utils/validation";
import axios from "axios";
import { errorTost } from "../utils/errorTost";
import { ServerUrl } from "../utils/constant";
const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [previewImg, setPrevImg] = useState(null);
  const [error, setError] = useState(" ");
  const phtoInp = useRef(null);
  const emailRef = useRef(null);
  const password1Ref = useRef(null);
  const password2Ref = useRef(null);
  const nameRef = useRef(null);

  const handileSumbit = (e) => {
    e.preventDefault();
    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const password1 = password1Ref?.current?.value;
    const password2 = password2Ref?.current?.value;

    if (isSignIn) {
      const valid = validation(name, email, password1, password2);

      if (error === null) {
        axios
          .post(ServerUrl + "/user-signin", {
            userName: name,
            email: email,
            password: password1,
          })
          .then((res) => {})
          .catch((e) => {
            setError(e);
          });
      } else {
        setError(valid);
      }
    } else {
      const valid = validation(name, email, password1, password2);

      if (error === null) {
        axios
          .post(ServerUrl + "/user-signup", {
            UserName: name,
            email: email,
            password: password1,
          })
          .then((res) => {})
          .catch((err) => {
            setError(err);
          });
      } else {
        errorTost(valid);
        setError(valid);
      }
    }
  };

  const handilImage = () => {
    const img = phtoInp.current.files[0];
    setPrevImg(URL.createObjectURL(img));
  };
  return (
    <div className="h-screen w-screen  bg-slate-800 pt-[2%]">
      <div className="dark">
        <div className=" mx-auto w-[600px] h-[650px] backdrop:blur-3xl shadow-[0_0_0_0.25px_white] rounded-t-md  bg-slate-800 p-10 pt-4 text-white ">
          <h1 className="font-bold  text-center   text text-3xl mt-3">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <form action="" onSubmit={handileSumbit}>
            {!isSignIn && (
              <div className="w-24 h-24 rounded-full mt-5 mx-auto flex  bg-slate-600 ">
                <input
                  type="file"
                  accept="image/*"
                  ref={phtoInp}
                  onChange={handilImage}
                  className="hidden"
                />
                {previewImg ? (
                  <div className="">
                    <img
                      src={previewImg}
                      className="object-cover rounded-full   w-24 h-24  "
                      onMouseEnter={() => setDeleteIcon(true)}
                      onMouseLeave={() => setDeleteIcon(false)}
                      alt=""
                    />
                  </div>
                ) : (
                  <h1
                    className="mt-9 cursor-pointer"
                    onClick={() => phtoInp.current.click()}
                  >
                    UploadImage
                  </h1>
                )}
              </div>
            )}

            {isSignIn && <div className="mt-28"></div>}
            {!isSignIn && (
              <input
                type="text"
                className="w-full bg-slate-600 py-5 pl-1 shadow-[0_0_0_0.25px_white]   border-white outline-none mt-5  h-9 rounded-sm  "
                ref={nameRef}
                placeholder="enter your name"
              />
            )}

            <input
              type="email"
              className="w-full bg-slate-600 py-5 pl-1 shadow-[0_0_0_0.25px_white]    border-white outline-none mt-10  h-9 rounded-sm  "
              ref={emailRef}
              placeholder="enter your email"
            />

            <input
              type="password"
              className="w-full bg-slate-600 py-5 pl-1 shadow-[0_0_0_0.25px_white]   border-white outline-none mt-10  h-9 rounded-sm  "
              ref={password1Ref}
              placeholder="enter your password"
            />

            {!isSignIn && (
              <input
                type="password"
                className="w-full bg-slate-600 py-5 pl-1 shadow-[0_0_0_0.25px_white]   border-white outline-none mt-10  h-9 rounded-sm  "
                ref={password2Ref}
                placeholder="confirm password"
              />
            )}

            <div className="flex justify-between">
              {error && (
                <span className="text-red-500 font-semibold">{`${error}`}</span>
              )}
              <span
                className="mt-5 ml-1 font-semibold cursor-pointer hover:text-slate-600 flex "
                onClick={() => setIsSignIn(!isSignIn)}
              >
                {isSignIn
                  ? "Don't have an account?"
                  : "already have an account"}
              </span>
            </div>
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
