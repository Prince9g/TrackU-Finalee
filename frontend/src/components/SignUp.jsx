import React, { useState } from 'react';
import { sendOtp, registerUser } from '../api'; // Import your API functions
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const initialFormState = {
    username: '',
    mobile: '',
    otp: '',
    password: '',
    confirmPassword: '',
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async () => {
    try {
      const response = await sendOtp(formData.mobile);
      if (response.success) {
        setOtpSent(true);
        toast.success(`OTP sent to ${formData.mobile}`);
      } else {
        toast.error(response.error || "Failed to send OTP");
      }
    } catch (err) {
      toast.error("Error sending OTP. Please try again.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await registerUser(formData);

      if (response.success) {
        toast.success(response.message || "User Registered SuccessFully!!");
        resetForm();
        setTimeout(()=>{
          navigate('/login');
        }, (500));
      } else if (response.error) {
        toast.error(response.error);
      } else {
        toast.error("Unknown error during registration. Please try again.");
      }
    } catch (err) {
      toast.error("Error registering user. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setOtpSent(false);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: "url('https://media.gettyimages.com/id/1494134492/vector/abstract-financial-graph-with-uptrend-in-stock-market-on-blue-colour-background-abstract.jpg?s=612x612&w=0&k=20&c=rD47_cIVtoeOmEu81CFOww7NJRo_0KPWTRKoP-C6Kvc=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Mobile */}
          <div className="flex items-center space-x-2">
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter mobile number"
              />
            </div>
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={otpSent}
              className={`px-4 py-2 mt-6 text-white rounded-lg ${otpSent ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {otpSent ? "OTP Sent" : "Send OTP"}
            </button>
          </div>

          {/* OTP */}
          {otpSent && (
            <div>
              <label className="block text-sm font-medium text-gray-700">OTP</label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter OTP"
              />
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm password"
            />
          </div>

          {/* Register Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Register
            </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


