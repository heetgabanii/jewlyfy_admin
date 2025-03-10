import React, { useState } from "react";
import { useApi } from "../apiProvider";
import Box from "../components/Box";
import "./Styles.css"; 
import TextField from "../components/Textfield";
import Button from "../components/Button";
import Logo from "../logo/logo-transparent.svg";
import { Typography } from "@mui/material";
import AppleIcon from "../assets/AppleIcon";
import GoogleIcon from "../assets/GoogleIcon";
import FacebookIcon from "../assets/FacebookIcon";

const Login = () => {
  const api = useApi();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };


  return (
    <Box
      className="login-container flex items-center justify-center min-h-screen"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={Logo}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "80px",
          height: "auto",
          zIndex: 10,
        }}
        alt="Logo"
      />
      <Box
        className="bg-black p-6 rounded-lg shadow-md w-96"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px ",
          border: "1px solid #ccc",
          width: "25%",
          padding: "30px",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <Typography
          variant="h2"
          style={{ color: "#243b55", fontSize: "24px", fontWeight: "bold" }}
          className="text-center text-xl font-bold mb-4 text-white"
        >
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3"
          style={{
            backgroundColor: "#f9f9f9",
            borderColor: "#aaa",
            width: "95%",
            padding: "10px",
            // paddingBottom:'0px'
          }}
        />

        <TextField
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={email}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            backgroundColor: "#f9f9f9",
            borderColor: "#aaa",
            width: "95%",
            padding: "10px",
          }}
        />


        <Button
          onClick={handleLogin}
          variant="ghost"
          size="large"
          fullWidth
          className="shadow-lg hover:shadow-xl"
          style={{
            padding: "10px",
            marginLeft: "7px",
            borderRadius: "5px",
            width: "95%",
            cursor: "pointer",
            backgroundColor: "#303030",
            border: "none",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            boxShadow: "0 2px 3px 0 #000",
          }}
        >
          Login
        </Button>
        <Typography
          variant="body1"
          style={{ textAlign: "center", padding: "0", marginLeft: "-20px" }}
        >
          or
        </Typography>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "-15px",
            cursor: "pointer",
            width: "100%",
            gap: "28%",
          }}
        >
          <AppleIcon size={30} />
          <FacebookIcon size={24} />
          <GoogleIcon size={21} />

        </Box>
        <p className="text-center text-sm mt-3">
          New to Jwelify?{" "}
          <a href="/Register" className="text-blue-500">
            Register
          </a>
        </p>
      </Box>
    </Box>
  );
};

export default Login;
