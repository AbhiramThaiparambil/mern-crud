import React, { useRef, useState } from "react";
import axios from "axios";
import { ServerUrl } from "../../utils/constant";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
const EditProfile = ({ user, setEdit }) => {
  const editImage = useRef();
  const editEmail = useRef();
  const editUserName = useRef();

  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState(user.profileImage || " ");
  const [loading, setLoading] = useState(false);
  const [imgEdit, setImgedit] = useState(null);
  const uploadImgCloudinary = async () => {
    const img = editImage.current.files[0];
    if (!img) return;

    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "userAvatar-crud");

    try {
      setLoading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dfhlyxwyy/image/upload",
        formData
      );

      setImgUrl(res.data.secure_url);
      setImgedit(res.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userName = editUserName.current.value;
    const email = editEmail.current.value;
    const token = localStorage.getItem("token");

    try {
      const response = await axios.patch(`${ServerUrl}/user-edit`, {
        editUserName: userName,
        editEmail: email,
        profileImage: imgEdit,
        token,
      });

      toast.success(response.data.message, {
        position: "bottom-right",
        autoClose: 4999,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      console.log(response.data.updatedData);
      dispatch(addUser(response.data.updatedData));
    } catch (error) {
      toast.warn(error?.response?.data?.message, {
        position: "top-right",
        autoClose: 4999,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="mx-auto w-[550px] h-[500px] shadow-md rounded-md mt-5 border border-white bg-slate-800 p-10 text-white">
      <h1 className="font-bold text-center text-3xl">Edit Profile</h1>

      <form onSubmit={handleSubmit}>
        <div className="w-24 h-24 rounded-full mx-auto bg-slate-600">
          <input
            type="file"
            accept="image/*"
            ref={editImage}
            onChange={uploadImgCloudinary}
            className="hidden"
          />
          <div
            className="cursor-pointer"
            onClick={() => editImage.current.click()}
          >
            {imgUrl ? (
              <img
                src={imgUrl}
                alt="Profile"
                className="object-cover rounded-full w-24 h-24"
              />
            ) : (
              <p className="text-center mt-9">Upload Image</p>
            )}
          </div>
        </div>

        <input
          type="text"
          ref={editUserName}
          defaultValue={user.userName}
          className="w-full bg-slate-600 py-2 px-3 mt-5 rounded-md"
          placeholder="Enter your name"
        />

        <input
          type="email"
          ref={editEmail}
          defaultValue={user.email}
          className="w-full bg-slate-600 py-2 px-3 mt-5 rounded-md"
          placeholder="Enter your email"
        />

        <button
          type="submit"
          className="w-full py-2 mt-5 bg-slate-600 hover:bg-white hover:text-slate-600 rounded-md"
          disabled={loading}
        >
          {loading ? "Saving..." : "Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditProfile;
