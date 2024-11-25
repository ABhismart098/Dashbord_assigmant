// Import or define apiClient
import apiClient from './apiClient'; // Ensure correct path to apiClient module
import endpoints from './endpoints'; // Ensure correct path to endpoints constants

// Define loginUser function
export const loginUser = async (email, password) => {
  try {
    // Debug log for outgoing API request
    console.log("Sending API request with:", { email, password });

    // Send POST request to the login endpoint
    const response = await apiClient.post(endpoints.LOGIN, { email, password });

    // Debug log for API response
    console.log("API response:", response.data);
    console.log("check response")

    // Return the response data
    return response.data;
  } catch (error) {
    // Log the error for debugging
    console.error(
      "Error in loginUser:",
      error.response?.data || error.message
    );

    // Throw error message from backend or a fallback
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

