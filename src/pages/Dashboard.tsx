import React from "react";
import { Outlet, Link } from "react-router-dom";
import Box from "../components/Box";
import Typography from "../components/Typography";
import Navbar from "../components/Navbar";

const Dashboard: React.FC = () => {
 
  return (
    <Box className="flex h-screen w-screen">
      {/* Header */}
      <Navbar />
    
            <Box className="flex-1 flex flex-col">
        <Box
          style={{
            background: "#ccc",
            width: "250px",
            height: "calc(100vh - 100px)",
            padding: "20px",
          }}
          className="w-[250px] bg-gray-800 text-white fixed h-[calc(100vh-60px)] p-4 top-[60px]"
        >
          <Typography variant="body1"> <Link to="/dashboard">Dashboard</Link> </Typography>
          <Typography variant="body1"> <Link to="/dashboard/users">Users</Link> </Typography>
          <Typography variant="body1"><Link to="/dashboard/products">Products</Link> </Typography>
          <Typography variant="body1">Orders</Typography>
          <Typography variant="body1">Customers</Typography>
          <Typography variant="body1">Content</Typography>
          <Typography variant="body1">Settings</Typography>
          <Typography variant="body1">Logout</Typography>
        </Box>
        <Box className="ml-[250px] flex-1 h-[calc(100vh-60px)] p-4 overflow-auto">
          <Outlet />
        </Box>
        {/* Main Content */}
       
      </Box>
    </Box>
  );
};

export default Dashboard;
