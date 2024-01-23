// App.js
import React from 'react';
import Header from './components/Header';
import MealSelection from './components/MealSelection';
import Authentication from './components/Authentication';
import BookingSummary from './components/BookingSummary';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MealSelection />
        <Authentication />
        <BookingSummary />
      </main>
      <Footer />
    </div>
  );
}

export default App;
