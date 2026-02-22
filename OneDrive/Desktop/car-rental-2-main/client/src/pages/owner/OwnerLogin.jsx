import React from "react";
import Login from "../../components/Login";

const OwnerLogin = () => {
  return (
    <div className="min-h-screen bg-light flex items-center justify-center px-4">
      <Login variant="owner" embedded />
    </div>
  );
};

export default OwnerLogin;
