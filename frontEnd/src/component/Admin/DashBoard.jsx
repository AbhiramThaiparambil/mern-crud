import React, { useState } from "react";
import UserProfile from "./UserProfile";
import Header from "./Header";
const DashBoard = () => {
  return (
    <div className="bg-blue-50 ">
        <Header/>
      <div className="flex flex-wrap mx-20 ">

        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
    </div>
  );
};

export default DashBoard;
