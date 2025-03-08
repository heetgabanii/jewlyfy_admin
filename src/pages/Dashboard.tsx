import React from "react";
import Box from "../components/Box";
import Typography from "../components/Typography";

const Dashboard: React.FC = () => {
  return (
    <Box className="flex h-screen w-screen">
      <Box style={{height:'60px', borderBottom:'1px solid #ccc', display:'flex', alignItems:'center'}} className="h-[60px] w-screen bg-gray-900 text-white flex items-center px-6 fixed top-0 left-0 shadow-md">
          <Typography variant="h3" style={{ margin:'0'}} >Dashboard</Typography>
          {/* <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div> */}
        </Box>
     
      
      <Box className="flex-1 flex flex-col ml-[150px]" >
      <Box
  style={{
    background: "#ccc",
    width: "250px",
    height: "calc(100vh - 100px)", // Corrected height calculation
    padding: "20px",
  }}
  className="w-[250px] bg-gray-800 text-white fixed h-[calc(100vh-60px)] p-4 top-[60px]"
>
  <Typography variant="body1" style={{ margin: "0px" }}>
    Dashboard
  </Typography>
  <Typography variant="body1">Products</Typography>
  <Typography variant="body1">Orders</Typography>
  <Typography variant="body1">Customers</Typography>
  <Typography variant="body1">Content</Typography>
  <Typography variant="body1">Settings</Typography>
  <Typography variant="body1">Logout</Typography>
</Box>
        {/* <Box className="mt-[60px] p-6 overflow-auto h-[calc(100vh-60px)] w-[calc(100vw-150px)] bg-gray-100">
          <Typography variant="body1">Main content goes here...</Typography>
          <Box>
           
            
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;