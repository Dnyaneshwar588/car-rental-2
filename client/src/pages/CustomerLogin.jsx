import React from "react";
import Login from "../components/Login";

const CustomerLogin = () => {
  return (
    <div className="min-h-screen bg-light flex items-center justify-center px-4">
      <Login variant="customer" embedded />
    </div>
  );
};

export default CustomerLogin;
