import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AuthHeader from './components/AuthHeader';
import MealSelection from './components/MealSelection';
import MealOptions from './components/MealOptions'; // Import the MealOptions component
import Authentication from './components/Authentication';
import Footer from './components/Footer';
import BookingSummary from './components/BookingSummary';
import UserProfile from './components/UserProfile'; // Import the UserProfile component

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route for Authentication */}
          <Route
            index
            element={
              <>
                <AuthHeader />
                <Authentication />
                <Footer />
              </>
            }
          />
          {/* Route for Meal Selection */}
          <Route
            path="/meal-selection"
            element={
              <>
                <Header />
                <MealSelection />
                <Footer />
              </>
            }
          />
          {/* Route for Meal Options */}
          <Route
            path="/meal-options/:selectedDate"
            element={
              <>
                <Header />
                <MealOptions />
                <Footer />
              </>
            }
          />
          {/* Route for Booking Summary */}
          <Route
            path="/booking-summary"
            element={
              <>
                <Header />
                <BookingSummary />
                <Footer />
              </>
            }
          />
          {/* Route for User Profile */}
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <UserProfile />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
