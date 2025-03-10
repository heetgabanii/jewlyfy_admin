import { useState } from "react";
import Box from "./Box";
import { Popover, MenuItem } from "@mui/material";
import Typography from "./Typography";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-transparent.png";
import StoreIcon from "../assets/StoreIcon.svg";

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

  return (
    <Box
      style={{
        height: "100px",
        borderBottom: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#000",
      }}
      className="h-[60px] w-screen bg-gray-900 text-white flex items-center px-6 fixed top-0 left-0 shadow-md"
    >
      <Typography variant="h3" style={{ margin: "0" }}>
        <img
          src={Logo}
          style={{ width: "120px", height: "120px" }}
          alt="logo"
        />
      </Typography>

      <Box
        display="flex"
        justifyContent="flex-end"
        className="ml-auto cursor-pointer"
        onClick={handleClick}
        style={{ marginRight: "40px" }}
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
        <Box
          style={{
            background: "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Link to="/dashboard/all-stores" style={{ textDecoration: "none", alignItems:'center'
           }}>
            <MenuItem onClick={handleClose} style={{ display: "flex", alignItems: "center",margin:'0', gap:'12px'}}>
              <img src={StoreIcon} alt="store-icon" width="25px" />
              <Typography
                style={{
                  cursor: "pointer",
                  color: "black",
                  alignItems:'center',
                 margin:'0'
                }}
              >
                All Stores
              </Typography>
            </MenuItem>
          </Link>
          <Link
            to="/dashboard/manage-account"
            style={{ textDecoration: "none" }}
          >
            <MenuItem>
              <Typography
                style={{
                  cursor: "pointer",
                  color: "black",
                   display: "flex", alignItems: "center",margin:'0'
                }}
              >
                {" "}
                Manage account
              </Typography>{" "}
            </MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem onClick={handleClose}>
              <Typography
                style={{
                  cursor: "pointer",
                  color: "black",
                   display: "flex", alignItems: "center",margin:'0'
                }}
              >
                Logout
              </Typography>
            </MenuItem>
          </Link>
        </Box>
      </Popover>
    </Box>
  );
};
export default Navbar;
