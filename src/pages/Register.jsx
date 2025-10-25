import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pw) => {
    if (pw.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(pw)) return "Must have an uppercase letter";
    if (!/[a-z]/.test(pw)) return "Must have a lowercase letter";
    return null;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    const passErr = validatePassword(password);
    if (passErr) {
      setError(passErr);
      return;
    }

    createUser(email, password)
      .then(result => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Account created");
            navigate("/");
          });
      })
      .catch(err => setError(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] mt-10">
      <form onSubmit={handleRegister} className="card bg-[#0b0b0b] p-6 w-full max-w-md">
       <h2 className="text-2xl font-bold mb-4">Register</h2>
        <label className="label">Name</label>
        <input name="name" className="input" required />
        <label className="label mt-2">Photo URL</label>
        <input name="photo" className="input" />
        <label className="label mt-2">Email</label>
        <input name="email" type="email" className="input" required />
        <label className="label mt-2">Password</label>
        <input name="password" type="password" className="input" required />
        {error && <p className="text-red-400 mt-2">{error}</p>}
        <button className="btn btn-primary mt-4">Register</button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-purple-500 hover:underline">
            Login
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Register;
