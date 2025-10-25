import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    logIn(email, password)
      .then(() => {
        toast.success("Logged in");
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        toast.success("Logged in with Google");
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] mt-10">
      <form
        className="card bg-white p-8 w-full max-w-md shadow-lg"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
          required
        />

        <label className="label mt-3">Password</label>
        <input
          name="password"
          type="password"
          className="input mt-3"
          placeholder="Password"
          required
        />

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button type="submit" className="btn btn-primary mt-4 w-full">
          Login
        </button>

        <div className="divider">OR</div>

        <button
          type="button"
          onClick={handleGoogle}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={24} />
          Login with Google
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-purple-500 hover:underline">
            Register
          </Link>
        </p>

        <p className="mt-2 text-center">
          <Link to="/auth/forgot" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
