import React from "react";

const Header = () => {
  return (
    <div className="h-20 bg-slate-700 flex justify-between">
      <div className=" ">
        <h1 className="text-white font-serif text-2xl mt-6 ml-3">
          ADMIN DASHBOARD
        </h1>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="h-12 w-96 mr-56  mt-5 rounded-lg outline-none  border border-black pl-4 "
      />
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        className="px-10 h-10 mt-5 bg-red-700 mr-9 text-white rounded-md font-bold hover:bg-slate-100 hover:font-bold hover:text-red-500 hover:font"
      >
        log-out
      </button>
    </div>
  );
};

export default Header;
