import endpoints from "./endpoints";
import apiClient from "./apiClient";

export const loginUser = async (userName, passwordValue) => {
  try {
    console.log("Sending API request with:", { userName, passwordValue }); // Debug log
    
    // Make the API request
    const response = await apiClient.post(endpoints.LOGIN, { userName, passwordValue });
    
    console.log("API response:", response.data); // Debug log
    return response.data; // Return the successful response data
  } catch (error) {
    // Handle API-specific errors
    if (error.response) {
      console.error("Server Error in loginUser:", error.response.data);
      
      // Throw backend-provided error message or a generic one
      throw error.response.data?.message || "Invalid credentials. Please try again.";
    } 
    
    // Handle network or unexpected errors
    console.error("Unexpected Error in loginUser:", error.message);
    throw "Unable to connect to the server. Please check your internet connection.";
  }
};
