import endpoints from "./endpoints";

import apiClient from "./apiClient";

export const loginUser = async (email, password) => {
  try {
  console.log("Sending API request with:", { email, password }); // Debug log
  const response = await apiClient.post(endpoints.LOGIN, { email, password });
  console.log("API response:", response.data); // Debug log
  return response.data;
  } catch (error) {
  console.error("Error in loginUser:", error.response?.data || error.message);
  throw error.response?.data?.message || "Login failed"; // Show backend error or fallback
  }
 };