import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import Header from "./Header";
import axios from "axios";
import { ServerUrl } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addUsers } from "../../store/allUsers";
import { useSelector } from "react-redux";
const DashBoard = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((store) => store.allUsers.allUsers[0]);
  console.log("allUsers");
  console.log(allUsers);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const data = await axios.post(ServerUrl + "/admin-getusers", {
        adminToken: token,
      });

      dispatch(addUsers(data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="bg-blue-50 ">
      <Header />
      <div className="flex flex-wrap ">
        {allUsers &&
          allUsers.map((user) => {
            return <UserProfile  user={user} />;
          })}
      </div>
    </div>
  );
};

export default DashBoard;
