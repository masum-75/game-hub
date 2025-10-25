import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        toast("Profile updated");
        navigate("/profile");
      })
      .catch(err => toast(err.message));
  };

  return (
    <form onSubmit={handleUpdate} className="card bg-[#0b0b0b]  p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Update Info</h2>
      <label className="label">Name</label>
      <input value={name} onChange={(e)=>setName(e.target.value)} className="input" />
      <label className="label mt-2">Photo URL</label>
      <input value={photo} onChange={(e)=>setPhoto(e.target.value)} className="input" />
      <button className="btn btn-primary mt-4">Update Information</button>
    </form>
  );
};

export default UpdateProfile;