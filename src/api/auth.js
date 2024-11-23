// src/api/auth.js
import apiClient from "./axios";
import endpoints from "./endpoints";

// Login API
export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post(endpoints.LOGIN, { email, password });
    return response.data; // Return the data (e.g., token and user info)
  } catch (error) {
    throw error.response?.data?.message || "Login failed"; // Handle errors
  }
};

// Additional authentication APIs can be added here (e.g., registerUser, logoutUser)
