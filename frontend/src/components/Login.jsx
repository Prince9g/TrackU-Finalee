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
    <div>
      <div className="h-36 w-36 absolute top-8 left-60 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 1*/}
        <img
          src="https://m.media-amazon.com/images/G/01/amazonpayments/documentation/AmazonPay_BrandAssets/Logos/amazonpay-secondary-logo-rgb_rev.png"
          alt="Amazon"
          className="w-32 h-24 opacity-20 animate-bounce delay-500"
        />
      </div>

      <div className="w-32 h-32 absolute top-36 left-10 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 2*/}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAW5SmTfQHU5yTDpACqmTNZBjM7OgEORcetPOB_U9oas3KQ2CuE_VppVrs8y2DX0x1iAA&usqp=CAU"
          alt="Google Pay"
          className="w-28 opacity-20 animate-bounce rounded-2xl"
        />
      </div>

      <div className="w-44 h-44 absolute top-56 left-80 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 3*/}
        <img
          src="https://media.licdn.com/dms/image/D4E12AQHV3OFLwpWO7w/article-cover_image-shrink_720_1280/0/1707236126574?e=2147483647&v=beta&t=YvlSxlRbcSX5JCJVjzuysvk2-z7zaFXCjMssK7QfTas"
          alt="Paytm"
          className="w-32 h-32 opacity-20 animate-bounce delay-500"
        />
      </div>

      <div className="h-44 w-44 absolute bottom-14 left-6 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 4*/}
        <img
          src="https://icon2.cleanpng.com/20180528/csv/avp2j5fp8.webp"
          alt="Truecaller Pay"
          className="w-28 h-28 opacity-20 animate-bounce delay-500 rounded-full"
        />
      </div>
      <div className="h-44 w-44 absolute bottom-52 left-40 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 5*/}
        <img
          src="https://i.pinimg.com/originals/df/e1/2c/dfe12c0612d55ad86a28a642bdc00571.png"
          alt="Airtel Thanks"
          className="w-28 h-28 opacity-20 animate-bounce"
        />
      </div>

      <div className="h-36 w-36 absolute bottom-4 left-72 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 6*/}
        <img
          src="https://play-lh.googleusercontent.com/__dcaC1aUkZqsP7UW6vwZpQiayorQhdBzhXAatmzSVp7wtwfpdyswVHt2FpVsx51V1g"
          alt="Tata Neu"
          className="w-44 h-24 opacity-20 animate-bounce delay-500"
        />
      </div>

      <div className="h-48 w-48 absolute top-8 right-64 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 1R*/}
        <img
          src="https://www.phonepe.com/webstatic/8333/static/PhonePe_vertical-16158be8710408f3561e1d07d01d5d89.png"
          alt="Phone pay"
          className="w-40 opacity-20 animate-bounce delay-500"
        />
      </div>
 
      <div className="h-44 w-44 absolute top-36 right-10 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 2R*/}
        <img
          src="https://thedigitalfifth.com/wp-content/uploads/2019/10/Banner15.png"
          alt="Bhim UPI"
          className="w-32 opacity-20 animate-bounce delay-500 rounded-2xl"
        />
      </div>

      <div className="h-44 w-44 absolute top-60 right-80 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 3R*/}
        <img
          src="https://pbs.twimg.com/profile_images/1415665101470720008/ZXnjanfB_400x400.jpg"
          alt="Mobiquik"
          className="w-24 opacity-20 animate-bounce delay-500 rounded-2xl"
        />
      </div>
      <div className="h-44 w-44 absolute bottom-52 right-28 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 4R*/}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7huZX5057vsZlrDGoLhF2sSQ0sYz992mt9g&s"
          alt="Samsung Pay"
          className="w-28 opacity-20 animate-bounce delay-500 rounded-3xl"
        />
      </div>
      <div className="h-44 w-44 absolute bottom-32 right-80 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 5R*/}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hjJipHxmlFB6oHFFMXHoxUACF7xcwnpYpIW_o6HBv3Cn-zs9DvGnyIEHxdUNfM2MZCY&usqp=CAU"
          alt="FreeCharge"
          className="w-28 opacity-20 animate-bounce delay-500 rounded-full"
        />
      </div>
      <div className="h-44 w-44 absolute bottom-2 right-12 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 6R*/}
        <img
          src="https://pbs.twimg.com/profile_images/1168783629847187456/TcrCUlS__400x400.jpg"
          alt="Cred"
          className="w-28 opacity-20 animate-bounce delay-500 rounded-2xl"
        />
      </div>
      <div className="h-36 w-36 absolute bottom-0 right-1/4 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 7R*/}
        <img
          src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/dee93106a721406eeef4aff731f71627"
          alt="bharat pay"
          className="w-20 opacity-20 animate-bounce delay-500 rounded-2xl"
        />
      </div>
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100"
      style={{
        backgroundColor:"#111827"
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <div className="w-full max-w-md p-8 space-y-6 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 pb-4">Login to Continue</h2>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* Mobile */}
          <div className="flex items-center space-x-2">
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700 pb-2">Mobile Number</label>
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
            <label className="block text-sm font-medium text-gray-700 p-2">Password</label>
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
              className="w-full px-4 py-2 text-white bg-gradient-to-r from-green-400 via-green-600 to-green-800 rounded-lg hover:bg-green-700"
            >
              Login
            </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
