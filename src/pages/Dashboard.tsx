import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Box from "../components/Box";
import Typography from "../components/Typography";
import { Popover, MenuItem } from "@mui/material";

const Dashboard: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "profile-popover" : undefined;

  function stringToColor(string: string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  return (
    <Box className="flex h-screen w-screen">
      {/* Header */}
      <Box
        style={{
          height: "60px",
          borderBottom: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="h-[60px] w-screen bg-gray-900 text-white flex items-center px-6 fixed top-0 left-0 shadow-md"
      >
        <Typography variant="h3" style={{ margin: "0" }}>
          Dashboard
        </Typography>

        <Box
          display="flex"
          justifyContent="flex-end"
          className="ml-auto cursor-pointer"
          onClick={handleClick}
        >
          <Box
            style={{
              background: stringToColor("Heet Gabani"),
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: "white",
            }}
          >
            {`${"Heet Gabani".split(" ")[0][0]}${"Heet Gabani".split(" ")[1][0]}`}
          </Box>
        </Box>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <Link to="/login">
          <MenuItem onClick={handleClose}>Login</MenuItem>
          </Link>
          <Link to="/register">
          <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Link>
        </Popover>
      </Box>
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
