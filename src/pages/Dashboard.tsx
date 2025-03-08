import React from "react";
import { Outlet } from "react-router-dom";
import Box from "../components/Box";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <Box className="flex flex-col h-screen w-screen overflow-hidden">
      {/* Fixed Navbar */}
      <div className="h-[60px] w-full fixed top-0 left-0 bg-gray-800 z-10">
        <Navbar />
      </div>

      {/* Sidebar and Main Content - Proper Flex Layout */}
      <div style={{display:'flex'}} className="flex flex-1 pt-[60px]">
        {/* Sidebar (No Fixed Position) */}
        <div className="w-[250px] h-[calc(100vh-60px)] bg-gray-900 text-white flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content Area (Flex-1 makes it take remaining space) */}
        <div className="flex-1 h-[calc(100vh-60px)] p-4 overflow-auto bg-white">
          <Outlet />
        </div>
      </div>
    </Box>
  );
};

export default Dashboard;
