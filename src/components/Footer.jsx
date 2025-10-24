import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#111] text-gray-300 py-10 cursor-pointer">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold text-white">GAMEHUB</h3>
          <p className="text-sm mt-3">Your go-to destination for indie & AAA titles — discover, support, install.</p>
          <p className="text-xs mt-3">Phone: +8801880546365</p>
        </div>

        <div>
          <h4 className="font-semibold">Useful Links</h4>
          <ul className="flex flex-col mt-3 space-y-2 text-sm">
            <Link to="/">Home</Link>
            <Link to="/submit">Submit Game</Link>
            <Link to="/#library">Library</Link>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Games</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Best Sellers</li>
            <li>PS5 Only</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Customer Service</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Shipping & Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;