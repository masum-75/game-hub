import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) setEmail(location.state.email);
    document.title = "Gamehub | Forgot Password";
  }, [location.state]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
      window.open("https://mail.google.com", "_blank");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form onSubmit={handleReset} className="bg-white/5 shadow-xl rounded-xl p-8 w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Reset Password</h2>
        <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your registered email" className="input input-bordered w-full mb-4" required />
        <button type="submit" className="btn w-full btn-primary">Send Reset Email</button>
      </form>
    </div>
  );
};

export default ForgotPassword;