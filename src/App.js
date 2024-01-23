// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MealSelection from './components/MealSelection';
import Authentication from './components/Authentication';
import BookingSummary from './components/BookingSummary';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="/meal-selection" element={<Header />} />
          
        </Routes>
        <main>
          <Routes>
            <Route path="/meal-selection" element={<MealSelection />} />
            <Route path="/login" element={<Authentication />} />
          </Routes>
          <BookingSummary />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
