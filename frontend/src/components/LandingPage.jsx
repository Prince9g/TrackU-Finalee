import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const canvasRef = useRef(null);
  const [totalBalance, setTotalBalance] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [projectedExpenses, setProjectedExpenses] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  let barHeights = [];
  let targetHeights = [];
  let animationFrameId;

  // Function to animate numbers from 0 to target
  const animateNumber = (targetValue, setState, duration = 2000) => {
    let startValue = 0;
    const startTime = performance.now();

    const animate = () => {
      const elapsedTime = performance.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * progress);
      setState(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
  };

  const initializeBarHeights = (barCount, maxBarHeight) => {
    barHeights = Array.from({ length: barCount }, () => Math.random() * maxBarHeight);
    targetHeights = [...barHeights];
  };

  const drawBarGraph = (context) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    const barWidth = 35;
    const gap = 13;
    const barCount = Math.floor(context.canvas.width / (barWidth + gap));
    const maxBarHeight = context.canvas.height * 0.8;
    const baseLine = context.canvas.height - 10;

    if (barHeights.length === 0) {
      initializeBarHeights(barCount, maxBarHeight);
    }

    for (let i = 0; i < barCount; i++) {
      barHeights[i] += (targetHeights[i] - barHeights[i]) * 0.05;

      const x = i * (barWidth + gap);
      const y = baseLine - barHeights[i];

      context.fillStyle = `hsl(${(i * 20) % 360}, 70%, 50%)`;
      context.fillRect(x, y, barWidth, barHeights[i]);
    }

    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, baseLine);
    context.lineTo(context.canvas.width, baseLine);
    context.stroke();

    animationFrameId = requestAnimationFrame(() => drawBarGraph(context));
  };

  const updateTargetHeights = () => {
    targetHeights = targetHeights.map(() => Math.random() * (window.innerHeight * 0.8));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBarGraph(context);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationFrameId = requestAnimationFrame(() => drawBarGraph(context));
    const interval = setInterval(updateTargetHeights, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted) {
            setAnimationStarted(true);
            animateNumber(45750, setTotalBalance);
            animateNumber(8500, setTransactions);
            animateNumber(12000, setProjectedExpenses);
          }
        });
      },
      { threshold: 0.5 }
    );
    const cardElement = document.querySelector('#financial-cards');
    if (cardElement) {
      observer.observe(cardElement);
    }
    return () => observer.disconnect();
  }, [animationStarted]);

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden bg-gray-900">
        {/* Canvas background */}
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>

        {/* TrackU Heading */}
        <div className="relative z-10 flex flex-col items-center justify-center p-8 text-white">
          <h1 className="text-4xl font-semibold text-center text-white">
            TrackU Can Help in Detecting Your Finances
          </h1>
        </div>

        {/* Wrapped Content (Bar Graph + Financial Cards) */}
        <div className="relative z-10">
          {/* Dashboard Content */}
          <div
            id="financial-cards"
            className="flex flex-wrap justify-center items-center p-8 text-white"
          >
            {/* Financial Overview Card */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-96 mx-4 my-4">
              <h2 className="text-lg font-semibold text-white">Financial Overview</h2>
              <p className="text-3xl font-bold text-white">₹{totalBalance}</p>
              <p className="text-sm text-green-400">+8.2% this month</p>
            </div>

            {/* Expenditure Breakdown Card */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-96 mx-4 my-4 backdrop-blur-md">
              <h2 className="text-lg font-semibold text-white">Expenditure Breakdown</h2>
              <div className="text-xl font-medium text-white mt-4">
                <p>Transactions across Payment Apps: ₹{transactions}</p>
                <p>Category-wise Breakdown:</p>
                <ul className="list-disc ml-5 text-gray-300">
                  <li>Shopping: ₹2,500</li>
                  <li>Groceries: ₹1,200</li>
                </ul>
              </div>
            </div>

            {/* Future Expense Prediction Card */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 w-96 mx-4 my-4">
              <h2 className="text-lg font-semibold text-white">Future Expense Prediction</h2>
              <p className="text-xl font-medium text-white">₹{projectedExpenses}</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Get Started / Track Your Finances */}
      <div className="relative z-10 flex flex-col items-center justify-center py-10 px-5 bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100">
        <div className="text-center">
          {/* Animated Heading */}
          <h2 className="text-5xl font-bold text-gray-800 tracking-wide overflow-hidden">
            <span className="inline-block animate-slide">Get Started and Track Your Finances</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-lg font-medium text-gray-700 mt-4">
            It's time to take control of your financial journey with TrackU.
          </p>

          {/* Get Started Button */}
          <Link to='/signup'><button className="mt-6 px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            Get Started
          </button></Link>
        </div>

        {/* Custom Animation Styles */}
        <style jsx>{`
    @keyframes slide {
      0% {
        transform: translateX(100%);
      }
      50% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-slide {
      animation: slide 10s linear infinite; /* NEW: Continuous right-towards-left and back animation */
    }
  `}</style>
      </div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">

            {/* TrackU Logo and Description */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-4xl font-bold text-indigo-400">TrackU</h3>
              <p className="text-gray-400 text-sm mt-2">
                Track and manage your finances seamlessly. Your journey to financial freedom starts here.
              </p>
            </div>

            {/* Footer Navigation Links */}
            <div className="flex space-x-8 justify-center md:justify-start">
              {/* Replace "Features" with "About Us" */}
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About Us
              </a>
              {/* Replace "Pricing" with "Get Started" */}
              <a
                href="#get-started"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Get Started
              </a>
              {/* Replace "Contact Us" with "Support" */}
              <a
                href="#support"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Support
              </a>
              {/* Add Resources section */}
              <a
                href="#resources"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Resources
              </a>
              {/* Add Legal section */}
              <a
                href="#legal"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Legal
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 text-2xl">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Footer Bottom Text */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} TrackU. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default LandingPage;