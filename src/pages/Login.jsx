import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate, useLocation, Link } from "react-router";

const Login = () => {
  const { logIn, loginWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-base-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-5">Login</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <p className="mb-1 text-sm">
        Forgot Password? <Link className="text-primary" to="/auth/forgot-password">Reset here</Link>
      </p>
        <button className="btn btn-primary w-full">Login</button>
        <p className="mt-1 text-sm">
        Don't have an account? <Link className="text-primary" to="/auth/register">Register</Link>
      </p>
      </form>
      <button
        className="btn btn-outline w-full mt-3"
        onClick={loginWithGoogle}
      >
        Login with Google
      </button>
      
      
    </div>
  );
};

export default Login;