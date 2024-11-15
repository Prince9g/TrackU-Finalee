import React, { useState } from 'react';
import { LoginUser } from '../api'; // Import your API functions
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const initialFormState = {
    mobile: '',
    password: '',
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginUser(formData);

      if (response.success) {
        toast.success(response.message);
        resetForm();
        setTimeout(()=>{
          navigate('/dashboard');
        }, (1000));
      } else if (response.error) {
        toast.error(response.error);
      } else {
        toast.error("Unknown error during Login. Please try again.");
      }
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  const resetForm = () => {
    setFormData(initialFormState);
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
        <h2 className="text-3xl font-bold text-center text-gray-800">Login to Continue</h2>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* Mobile */}
          <div className="flex items-center space-x-2">
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter mobile number"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>

          {/* Login Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Login
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
