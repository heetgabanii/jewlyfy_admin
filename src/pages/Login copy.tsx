import React, { useState } from "react";
import { useApi } from "../apiProvider";
import Box from "../components/Box";
import "./Styles.css"; 
import TextField from "../components/Textfield";
import Button from "../components/Button";

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
        <Box className="login-container flex items-center justify-center min-h-screen" style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
            <Box className="bg-black p-6 rounded-lg shadow-md w-96" style={{ display: "flex", flexDirection: 'column', gap: '20px ', border: '1px solid #ccc', width: '30%', padding: '30px', borderRadius: '10px', background: '#fff' }}>
                <h2 style={{ color: '#243b55', fontFamily:'sans-serif'
                 }} className="text-center text-xl font-bold mb-4 text-white">Login</h2>

                <TextField
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-3"
                    style={{ backgroundColor: "#f9f9f9", width: '95%' }}
                />


                <TextField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={email}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ backgroundColor: "#f9f9f9", borderColor: "#fff", width: '95%' }}

                />


<Button
  onClick={handleLogin}
  variant="3d"
  size="large"
  fullWidth
  className="shadow-lg hover:shadow-2xl transform transition-all duration-900 ease-in-out hover:scale-105 hover:brightness-110"
  style={{
    padding: "10px",
    borderRadius: "5px",
    width: "95%",
    cursor: "pointer",
    boxShadow: "inset 2px 2px 6px rgba(109, 109, 109, 0.5)",
  }}
>
  Login
</Button>

              

               
            </Box>
        </Box>
    );
};

export default Login;
