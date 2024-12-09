import React, { useState, useRef } from 'react';

const AuthComponent = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="h-screen w-screen bg-slate-800 pt-[4%]">
      <div className="dark">
        <div className="mx-auto w-[600px] h-[700px] backdrop:blur-3xl shadow-[0_0_0_0.25px_white] rounded-t-md bg-slate-800 p-10 text-white">
          <h1 className="font-bold text-center text-3xl mt-3">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <form onSubmit={handleSubmit}>
            {!isSignIn && (
              <div className="flex flex-col items-center mb-6">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                <div 
                  onClick={handlePhotoClick} 
                  className="w-32 h-32 rounded-full bg-slate-600 mt-6 flex items-center justify-center cursor-pointer hover:bg-slate-500 relative"
                >
                  {profilePhoto ? (
                    <img 
                      src={profilePhoto} 
                      alt="Profile" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white">Upload Photo</span>
                  )}
                </div>
              </div>
            )}

            {!isSignIn && (
              <input
                type="text"
                className="w-full bg-slate-600 py-5 pl-3 shadow-[0_0_0_0.25px_white] border-white outline-none mt-4 h-9 rounded-sm"
                placeholder="Enter your name"
              />
            )}

            <input
              type="email"
              className="w-full bg-slate-600 py-5 pl-3 shadow-[0_0_0_0.25px_white] border-white outline-none mt-4 h-9 rounded-sm"
              placeholder="Enter your email"
            />

            <input
              type="password"
              className="w-full bg-slate-600 py-5 pl-3 shadow-[0_0_0_0.25px_white] border-white outline-none mt-4 h-9 rounded-sm"
              placeholder="Enter your password"
            />

            {!isSignIn && (
              <>
                <input
                  type="password"
                  className="w-full bg-slate-600 py-5 pl-3 shadow-[0_0_0_0.25px_white] border-white outline-none mt-4 h-9 rounded-sm"
                  placeholder="Confirm password"
                />
              </>
            )}
              
            <p 
              className="mt-5 ml-1 font-semibold cursor-pointer hover:text-slate-600" 
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? "Don't have an account?" : "Already have an account"}
            </p>
            
            <button 
              type="submit" 
              className="w-full mt-5 p-3 rounded-md bg-slate-600 hover:bg-white hover:text-slate-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;