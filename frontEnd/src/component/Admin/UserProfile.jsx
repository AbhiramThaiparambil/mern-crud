import React, { useState } from "react";
import axios from "axios";
import { ServerUrl } from "../../utils/constant";
import { Trash2 } from "lucide-react";
import { ToastContainer, toast ,Bounce} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
const ProfileCard = ({ user }) => {
  const dispatch=useDispatch()
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    userName: user.userName || " ",
    email: user.email || " ",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.post(`${ServerUrl}/admin-edit`, {
        userId: user._id,
        editName: profile.userName,
        editEmail: profile.email,
      });

      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

      setIsEditing(false); // Exit editing mode on success

    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${ServerUrl}/delete-user`, {
        data: { userId: user._id },
      });

      console.log("User deleted:", res.data);
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center ml-[49px] mt-10 bg-gray-100">
      <div className="bg-gray-800 text-white rounded-lg p-6 w-80 shadow-lg relative">
        
        <button
          onClick={handleDelete}
          className="absolute top-2 right-2 group transition-all duration-300 ease-in-out"
        >
          <div className="relative">
            <Trash2
              className="text-gray-400 group-hover:text-red-500
                 
                 group-hover:scale-110 
                 group-hover:rotate-6 
                 transition-all 
                 duration-300 
                 ease-in-out 
                 transform"
              size={24}
            />
          </div>
        </button>

        {!isEditing ? (
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src={user?.profileImage || "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"}
                alt="Profile"
                className="rounded-full w-20 h-20"
              />
            </div>
            <h2 className="text-xl font-bold mt-4">{profile.userName}</h2>
            <p className="text-gray-400">{profile.email}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Edit Profile
              </button>
              {user.isAdmin ? (
                <button
                  className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600"
                  onClick={async () => {
                    await axios.patch(`${ServerUrl}/change-admin-to-user`, {
                      userId: user._id,

                    }).then((res)=>{
                      toast.success(res.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        });
                    }).catch((e)=>{

                    });
                  }}
                >
                  Admin
                </button>
              ) : (
                <button
                  className="px-4 py-2 rounded-lg bg-red-600"
                  onClick={async () => {
                    await axios.patch(`${ServerUrl}/change-user-to-admin`, {
                      userId: user._id,
                    }).then((res)=>{
                      toast.success(res.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        });
                    }).catch((e)=>{

                    });
                  }}
                >
                  User
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  name="userName"
                  value={profile.userName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-black rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-black rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-4 space-x-2">
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <ToastContainer />

    </div>
  );
};

export default ProfileCard;
