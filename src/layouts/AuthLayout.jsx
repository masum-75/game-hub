import React, { useState } from "react";
import { Outlet } from "react-router";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="">
      <Navbar></Navbar>
      {loading ? (
        <Loading />
      ) : (
        <Outlet context={{ setLoading }} />
      )}
    </div>
  );
};

export default AuthLayout;