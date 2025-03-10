import { useState } from "react";
import Box from "./Box"
import { Popover, MenuItem } from "@mui/material";
import Typography from "./Typography";
import { Link } from "react-router-dom";
import Logo from '../assets/logo-transparent.png'

const Navbar = () => {

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
  

    return(
        <Box
        style={{
          height: "100px",
          borderBottom: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background:'#000'
        }}
        className="h-[60px] w-screen bg-gray-900 text-white flex items-center px-6 fixed top-0 left-0 shadow-md"
      >
        <Typography variant="h3" style={{ margin: "0" }}>
        <img src={Logo} style={{width:'120px',height:'120px'}} alt="logo" />
        </Typography>

        <Box
          display="flex"
          justifyContent="flex-end"
          className="ml-auto cursor-pointer"
          onClick={handleClick}
          style={{marginRight:'40px'}}
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
    )

}
export default Navbar