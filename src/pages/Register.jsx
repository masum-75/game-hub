import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate, Link } from "react-router";

const Register = () => {
  const { createUser, updateUser, loginWithGoogle } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
      return setError("Password must be at least 6 characters and contain uppercase and lowercase letters.");
    }

    try {
      const userCredential = await createUser(email, password);
      await updateUser({ displayName: name, photoURL });
      navigate("/");
      console.log(userCredential)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-base-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-5">Register</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          value={photoURL}
          onChange={e => setPhotoURL(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-full">Register</button>
      </form>
      <button
        className="btn btn-outline w-full mt-3"
        onClick={loginWithGoogle}
      >
        Register with Google
      </button>
      <p className="mt-3 text-sm">
        Already have an account? <Link className="text-primary" to="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;