import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreditScoreTracker from "./components/CreditScoreTracker";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import FutureExpenses from "./pages/FutureExpenses";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import MainLanding from "./components/MainLanding";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for Signup and Login without the main layout */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLanding/>} />
        {/* Main layout routes */}
        <Route
          path="*"
          element={
            <div className="App">
              <Navbar />
              <div className="flex">
                <Sidebar />
                <main className="flex-grow p-4">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/expenses" element={<Expenses />} />
                    <Route path="/future-expenses" element={<FutureExpenses />} />
                    <Route path="/credit-score" element={<CreditScoreTracker />} />
                  </Routes>
                </main>
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
