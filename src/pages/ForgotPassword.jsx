import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.email) setEmail(location.state.email);
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your Gmail.");
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
          navigate("/auth/login");
        }, 1500);
      })
      .catch((err) => {
        toast.error(err.message);
        setMessage(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <form
        onSubmit={handleReset}
        className="card bg-[#0b0b0b] p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Reset Password</h2>
        <label className="label text-white">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          className="input"
          required
        />
        <button className="btn btn-primary mt-4">Reset Password</button>
        {message && <p className="mt-3 text-sm text-gray-300">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
