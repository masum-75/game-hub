import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
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