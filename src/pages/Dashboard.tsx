import React from "react";
import Box from "../components/Box";
import Typography from "../components/Typography";

const Dashboard: React.FC = () => {
  return (
    <Box className="flex h-screen w-screen">
      {/* header */}
      <Box style={{height:'60px', boxShadow:"0px 3px 5px 0px #ccc"}} className="h-[60px] w-screen bg-gray-900 text-white flex items-center px-6 fixed top-0 left-0 shadow-md">
          <Typography variant="h1" style={{}}>Dashboard</Typography>
        </Box>
     
      
      {/* Main Content */}
      <Box className="flex-1 flex flex-col ml-[150px]">
        {/* Sidebar */}
        <Box style={{background:'#ccc', width:'250px'}} className="w-[150px] bg-gray-800 text-white fixed h-[calc(100vh-60px)] p-4 top-[60px]">
        <Typography variant="h1">Sidebar</Typography>
      </Box>
        
        {/* Content Area */}
        <Box className="mt-[60px] p-6 overflow-auto h-[calc(100vh-60px)] w-[calc(100vw-150px)] bg-gray-100">
          <Typography variant="body1">Main content goes here...</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;