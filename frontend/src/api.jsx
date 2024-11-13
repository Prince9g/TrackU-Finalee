import axios from 'axios';

const API_URL = "http://localhost:8080/user";  

// API call to send OTP
export const sendOtp = async (mobile) => {
    try {
        const response = await axios.post(`${API_URL}/send-otp`, { mobile });
        return response.data;
    } catch (error) {
        console.error("Error sending OTP:", error);
        throw error;
    }
};

// API call to verify OTP and register user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

export const LoginUser = async (userData) => {
    try{
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    }catch(error){
        console.error("Error Login", error);
        throw error;
    }
}
