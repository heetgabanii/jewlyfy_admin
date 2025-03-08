import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../apiProvider";
import Box from "../components/Box";
import TextField from "../components/Textfield";
import Button from "../components/Button";
import { Typography } from "@mui/material";
import Logo from "../logo/logo-transparent.svg";

const Register: React.FC = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.post("/auth/register", { email, password });
      alert("Registration successful!");
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box>
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
        />
      </Box>
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
        <Box
          className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md"
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
            className="text-2xl font-bold text-center mb-4"
            style={{ color: "#243b55", fontSize: "24px", fontWeight: "bold" }}
          >
            Register
          </Typography>
          {error && (
            <Typography
              variant="body1"
              className="text-red-500 text-sm text-center"
            >
              {error}
            </Typography>
          )}

          <form className="space-y-4" onSubmit={handleRegister}>
            <TextField
              label="Email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
              style={{
                backgroundColor: "#f9f9f9",
                borderColor: "#aaa",
                width: "95%",
                padding: "10px",
              }}
            />
            <TextField
              label="Password"
              type="email"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
              style={{
                backgroundColor: "#f9f9f9",
                borderColor: "#aaa",
                width: "95%",
                padding: "10px",
              }}
            />
            <Button
              // type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-8"
              disabled={loading}
              style={{
                padding: "10px",
                borderRadius: "5px",
                width: "95%",
                cursor: "pointer",
                margin: "8px",
              }}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>

          <p className="text-center text-sm mt-3">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </Box>
      </Box>
    </>
  );
};

export default Register;
