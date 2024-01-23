// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MealSelection from './components/MealSelection';
import Authentication from './components/Authentication';
import BookingSummary from './components/BookingSummary';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/login" component={Authentication} />
            <Route path="/meal-selection" component={MealSelection} />
            {/* Add more routes if needed */}
          </Switch>
          <BookingSummary />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
