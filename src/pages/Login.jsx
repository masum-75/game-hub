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
      .catch((err) => {
        setError(err.message);
      });
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
    <div className="flex justify-center items-center min-h-[60vh]">
      <form
        onSubmit={handleLogin}
        className="card bg-blue-400 p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <label className="label">Email</label>
        <input name="email" type="email" className="input" required />
        <label className="label mt-3">Password</label>
        <input name="password" type="password" className="input" required />
        <div className="flex flex-col mt-3 gap-4">
          <Link to="/auth/forgot" className="text-lg link">
            Forgot password?
          </Link>
          <button className="btn btn-primary btn-md" type="submit">
            Login
          </button>
        </div>
        {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
        <div className="divider">OR</div>
        <button
          type="button"
          onClick={handleGoogle}
          className="btn btn-outline w-full"
        >
          <FcGoogle size={24} />
          Login with Google
        </button>
        <p className="mt-4 font-semibold text-center">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-purple-400 ">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
