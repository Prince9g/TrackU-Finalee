import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreditScoreTracker from "./components/CreditScoreTracker";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import FutureExpenses from "./pages/FutureExpenses";
import Signup from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'expenses':
        return <Expenses />;
      case 'futureExpenses':
        return <FutureExpenses />;
      case 'creditScore':
        return <CreditScoreTracker />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <Sidebar setCurrentPage={setCurrentPage} />
        <main className="flex-grow p-4">
          {renderPage()}
        </main>
      </div>
      <Footer />
    </div>
    // <Signup/>
    // <Login/>
  );
};

export default App;
