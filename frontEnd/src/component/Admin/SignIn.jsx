import React, { useState, useRef } from "react";
import validation from "../../utils/validation";
import axios from "axios";
import { ServerUrl } from "../../utils/constant";
import { ToastContainer, toast,Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [error, setError] = useState("");
  const emailRef = useRef(' ');
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value; // Added optional chaining
    const password = passwordRef.current?.value; // Added optional chaining

    const valid = validation(null, email, password, null, false);

    if (valid===null) {
      setError(" "); 

      axios
        .post(`${ServerUrl}/admin-signin`, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
            localStorage.setItem('adminToken',res?.data?.adminToken)
            
            window.location.reload()
            
        })
        .catch((error) => {
          console.error(error);
          toast.warn(error?.response?.data?.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
            setError(error?.response?.data?.message); 
        });
    } else {
      setError(valid);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
               autoComplete="on"
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="text-red-500  text-md font-bold  mb-4">{error}</p>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign In
            </button>
            <ToastContainer />

          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
