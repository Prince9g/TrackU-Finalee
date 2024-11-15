import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import LandingPage from "./LandingPage";
import { Link } from "react-router-dom";

// Register ChartJS components
ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MainLanding = () => {
  // Sample data for charts
  const pieData = {
    labels: ["Rent", "Food", "Utilities", "Savings"],
    datasets: [
      {
        data: [300, 200, 100, 150],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#e91e63"],
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Investment Growth (in thousands)",
        data: [1, 1.2, 1.5, 1.7, 2], // Values are now in thousands
        borderColor: "#4caf50",
        borderWidth: 4,
        fill: false,
      },
    ],
  };

  return (
    <div>
    <div className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Floating Payment Logos */}
      <div className="w-32 h-32 absolute top-20 left-10 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 1*/}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAW5SmTfQHU5yTDpACqmTNZBjM7OgEORcetPOB_U9oas3KQ2CuE_VppVrs8y2DX0x1iAA&usqp=CAU"
          alt="Google Pay"
          className="w-24 opacity-20 animate-float delay-500 rounded-2xl"
        />
      </div>

      <div className="w-36 h-36 absolute top-56 left-32 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 2*/}
        <img
          src="https://media.licdn.com/dms/image/D4E12AQHV3OFLwpWO7w/article-cover_image-shrink_720_1280/0/1707236126574?e=2147483647&v=beta&t=YvlSxlRbcSX5JCJVjzuysvk2-z7zaFXCjMssK7QfTas"
          alt="Paytm"
          className="w-28 h-28 opacity-20 animate-float"
        />
      </div>

      <div className="h-36 w-36 absolute top-8 left-60 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 3*/}
        <img
          src="https://m.media-amazon.com/images/G/01/amazonpayments/documentation/AmazonPay_BrandAssets/Logos/amazonpay-secondary-logo-rgb_rev.png"
          alt="Amazon"
          className="w-32 h-24 opacity-20 animate-float delay-500"
        />
      </div>

      <div className="h-36 w-36 absolute top-8 right-60 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 4*/}
        <img
          src="https://www.phonepe.com/webstatic/8333/static/PhonePe_vertical-16158be8710408f3561e1d07d01d5d89.png"
          alt="Phone pay"
          className="w-56 opacity-20 animate-float delay-500"
        />
      </div>

      <div className="h-44 w-44 absolute top-28 right-12 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 4*/}
        <img
          src="https://thedigitalfifth.com/wp-content/uploads/2019/10/Banner15.png"
          alt="Bhim UPI"
          className="w-28 opacity-20 animate-float delay-500 rounded-2xl"
        />
      </div>

      <div className="h-44 w-44 absolute top-60 right-36 transform flex flex-wrap justify-center items-center overflow-hidden pointer-events-none">
        {/* Floating Logos 4*/}
        <img
          src="https://pbs.twimg.com/profile_images/1415665101470720008/ZXnjanfB_400x400.jpg"
          alt="Mobiquik"
          className="w-20 opacity-20 animate-float delay-700 rounded-2xl"
        />
      </div>



      {/* Header Section */}
      <header className="relative z-10 p-8 text-center">
        <div className="flex justify-center items-center space-x-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
            alt="Graph Logo"
            className="w-10 h-10"
          />
          <h1 className="text-5xl font-bold">TrackU</h1>
        </div>
        <p className="mt-2 text-lg text-gray-400">Welcome to your TrackU Dashboard</p>
      </header>

      {/* Main Content Section */}
      <main className="relative z-10 px-6 py-10">
        <section className="text-center space-y-8 my-10">
          <h2 className="text-3xl font-semibold">Manage Your Finances Effortlessly</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            TrackU helps you monitor your expenses, set budgets, and make informed financial decisions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to='/signup'><button className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition">
              Sign Up
            </button></Link>
            <Link to='/login'><button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
              Login
            </button></Link>
          </div>
        </section>

        <br />
        <hr />

        {/* Chart Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md h-100"> {/* Pie chart container with height h-80 */}
            <h3 className="text-lg font-semibold mb-4">Budget Breakdown</h3>
            <Pie data={pieData} />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md "> {/* Set height for the Line Chart container */}
            <h3 className="text-lg font-semibold mb-4">Investment Growth</h3>
            <Line data={lineData} options={{ maintainAspectRatio: true }} />
          </div>
        </section>
      </main>
      <br />
      <hr />

      {/* Custom Tailwind CSS for Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0); }
            25% { transform: translate(15px, -15px); }
            50% { transform: translate(-15px, 15px); }
            75% { transform: translate(10px, 10px); }
            100% { transform: translate(0, 0); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
        `}
      </style>
    </div>

    {/* ABOUT US SECTION */}

    
    <div className="bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 py-16 px-6 sm:px-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 tracking-wide">
          Why Choose TrackU?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          TrackU is not just another financial tool. It’s your smart companion on the journey to financial freedom.
        </p>
      </div>

      {/* About Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Overview Block */}
        <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your Financial Overview</h3>
          <p className="text-gray-700">
            Track your financial journey with real-time insights. See how your expenditures, savings, and income evolve over time — all in one dashboard.
          </p>
        </div>

        {/* Expenditures Block */}
        <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expenditure Breakdown</h3>
          <p className="text-gray-700">
            Monitor your spending patterns by app and category. Easily see where your money goes, so you can make smarter financial decisions.
          </p>
        </div>

        {/* Future Expense Prediction Block */}
        <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Predict Your Future</h3>
          <p className="text-gray-700">
            Use our predictive tools to forecast future expenses. We help you plan ahead, manage your budget, and avoid unexpected costs.
          </p>
        </div>

        {/* CIBIL Score Tracker Block */}
        <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Track Your Credit Health</h3>
          <p className="text-gray-700">
            Keep tabs on your CIBIL score and improve your credit health. We provide actionable steps to boost your score and achieve your financial goals.
          </p>
        </div>

      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h4 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to take control of your finances?
        </h4>
        <p className="text-lg text-gray-600 mb-6">
          Sign up today and start your journey towards smarter financial decisions with TrackU.
        </p>
        <Link to='/signup'><button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
          Get Started
        </button></Link>
      </div>
    </div>

    {/* Graph other section */}
    <LandingPage/>
    </div>
  );
};

export default MainLanding;