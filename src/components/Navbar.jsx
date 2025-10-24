import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { Menu, X } from "lucide-react"; 
import userIcon from "../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => navigate("/"))
      .catch(() => {});
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between relative">
      
      <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        GAMEHUB
      </div>

      
      <ul className="hidden md:flex gap-10 text-sm justify-center items-center absolute left-1/2 transform -translate-x-1/2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-semibold" : "text-gray-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/submit"
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-semibold" : "text-gray-300"
            }
          >
            Submit Game
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#library"
            className="text-gray-300 hover:text-purple-400"
          >
            Library
          </NavLink>
        </li>
      </ul>

     
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <>
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user.photoURL || userIcon}
              alt="avatar"
            />
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => navigate("/profile")}
            >
              Profile
            </button>
            <button
              className="btn btn-primary btn-sm bg-purple-500 hover:bg-purple-600"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/auth/login"
              className="btn btn-outline btn-sm border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className="btn btn-primary btn-sm bg-purple-500 hover:bg-purple-600"
            >
              Register
            </NavLink>
          </>
        )}
      </div>

     
      <button
        className="md:hidden text-gray-200"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

     
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-6 z-50 md:hidden">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-200 hover:text-purple-400">
            Home
          </NavLink>
          <NavLink to="/submit" onClick={() => setIsMenuOpen(false)} className="text-gray-200 hover:text-purple-400">
            Submit Game
          </NavLink>
          <NavLink to="/#library" onClick={() => setIsMenuOpen(false)} className="text-gray-200 hover:text-purple-400">
            Library
          </NavLink>
          <div className="mt-4 border-t border-gray-700 w-2/3"></div>
          {user ? (
            <>
              <button onClick={() => navigate("/profile")} className="text-gray-200 hover:text-purple-400">Profile</button>
              <button onClick={handleLogOut} className="text-purple-400">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/auth/login" onClick={() => setIsMenuOpen(false)} className="text-gray-200 hover:text-purple-400">
                Login
              </NavLink>
              <NavLink to="/auth/register" onClick={() => setIsMenuOpen(false)} className="text-gray-200 hover:text-purple-400">
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
