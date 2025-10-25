import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] text-gray-100 min-h-screen">
      <header className="border-b border-gray-800">
        <div className="w-11/12 mx-auto py-4">
          <Navbar />
        </div>
      </header>

      <main className="w-11/12 mx-auto py-8">
        <Outlet />
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
