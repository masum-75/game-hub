import React from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AuthLayout = () => {
  return (
    <div>
      <Login></Login>
      <Register></Register>
    </div>
  );
};

export default AuthLayout;