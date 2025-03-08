import { Link, NavLink } from "react-router-dom";
import Box from "./Box";
import Typography from "./Typography";

const Sidebar = () => {
  return (
    <Box className="flex flex-col" style={{
        background: "#ccc",
        width: "250px",
        height: "calc(100vh - 100px)",
        padding: "20px",
      }}>
      <Box
        className="w-[250px] bg-gray-800 text-white fixed h-[calc(100vh-60px)] p-4 top-[60px]"
      >
        <Typography variant="body1"> <Link to="/dashboard">Dashboard</Link> </Typography>
        <NavLink to="/dashboard/users" className={({ isActive }) => isActive ? "text-blue-500" : "text-white"}>
          Users
        </NavLink>
        <Typography variant="body1"><Link to="/dashboard/products">Products</Link></Typography>
        <Typography variant="body1">Orders</Typography>
        <Typography variant="body1">Customers</Typography>
        <Typography variant="body1">Content</Typography>
        <Typography variant="body1">Settings</Typography>
        <Typography variant="body1">Logout</Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;



