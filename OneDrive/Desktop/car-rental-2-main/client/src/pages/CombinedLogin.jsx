import React, { useState } from "react";
import Login from "../components/Login";

const CombinedLogin = () => {
  const [activeTab, setActiveTab] = useState("customer");

  return (
    <div className="min-h-screen bg-light px-6 md:px-16 lg:px-24 xl:px-32 py-12 flex items-center justify-center">
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Welcome to CarRental
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Login as a Customer to book cars or as an Owner to manage listings.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-borderColor shadow-lg p-8">
          {/* Tabs */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("customer")}
              className={`px-6 py-2 font-medium rounded-lg transition ${
                activeTab === "customer"
                  ? "bg-primary text-white"
                  : "bg-light text-gray-600 hover:bg-gray-100"
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setActiveTab("owner")}
              className={`px-6 py-2 font-medium rounded-lg transition ${
                activeTab === "owner"
                  ? "bg-primary text-white"
                  : "bg-light text-gray-600 hover:bg-gray-100"
              }`}
            >
              Owner
            </button>
          </div>

          {/* Content */}
          <div className="min-h-96">
            <Login variant={activeTab} embedded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedLogin;
