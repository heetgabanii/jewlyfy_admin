import React, { createContext, useContext } from "react";
import axios, { AxiosInstance } from "axios";

// Create a context for the API
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://192.168.1.9:3000/api/v1";

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

// Attach interceptors
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      // You might redirect to login if needed
    }
    return Promise.reject(error);
  }
);

// Create API context
const ApiContext = createContext<AxiosInstance>(api);

// Custom hook for accessing the API
export const useApi = () => {
  return useContext(ApiContext);
};

// Provider Component
export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};
