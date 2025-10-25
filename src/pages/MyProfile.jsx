import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router";
import userIcon from "../assets/user.png"


const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="p-6 rounded">
      <div className="flex items-center gap-6">
        <img src={user?.photoURL || userIcon} className="w-28 h-28 rounded-full object-cover" />
        <div>
          <h2 className="text-2xl font-bold">{user?.displayName || "No Name"}</h2>
          <p className="text-gray-400">{user?.email}</p>
          <button className="btn btn-outline btn-sm mt-3" onClick={() => navigate("/profile/update")}>Update Info</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
