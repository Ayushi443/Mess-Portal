// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AuthHeader from './components/AuthHeader';
import MealSelection from './components/MealSelection';
import Authentication from './components/Authentication';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route index element={<MealSelection />} />
                </Routes>
                <Footer />
              </>
            }
          />
          <Route
            path="/login/*"
            element={
              <>
                <AuthHeader />
                <Routes>
                  <Route index element={<Authentication />} />
                </Routes>
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
