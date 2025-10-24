import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); 
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };

  return (
    <nav className="bg-base-100 shadow-md rounded-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          
          <Link to="/" className="text-2xl font-bold text-primary">
            Game-Hub
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>Home</NavLink>
            <NavLink to="/extra" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>About</NavLink>

            {!user ? (
              <>
                <NavLink to="/auth/login" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>Login</NavLink>
                <NavLink to="/auth/register" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>Register</NavLink>
              </>
            ) : (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL || "https://i.ibb.co/2kR0V2b/default-avatar.png"} alt="Profile" />
                  </div>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                  <li><Link to="/profile">My Profile</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 space-y-3 bg-base-100 shadow-inner rounded-b-lg">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/extra" onClick={() => setIsMenuOpen(false)}>About</NavLink>

          {!user ? (
            <>
              <NavLink to="/auth/login" onClick={() => setIsMenuOpen(false)}>Login</NavLink>
              <NavLink to="/auth/register" onClick={() => setIsMenuOpen(false)}>Register</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile" onClick={() => setIsMenuOpen(false)}>My Profile</NavLink>
              <button onClick={() => { handleLogout(); setIsMenuOpen(false); }}>Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;