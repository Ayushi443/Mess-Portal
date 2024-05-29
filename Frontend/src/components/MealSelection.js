import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';  // Import axios

const MealSelection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [meals, setMeals] = useState([]);  // State to store meals
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/meals/')
      .then(response => {
        setMeals(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the meals!", error);
      });
  }, []);

  const handleViewMenu = (messNumber) => {
    let imageUrl;
    switch (messNumber) {
      case 1:
        imageUrl = '/menu.jpg';
        break;
      case 2:
        imageUrl = '/menu2.jpg';
        break;
      case 3:
        imageUrl = '/menu3.jpg';
        break;
      default:
        imageUrl = null;
    }
    setSelectedImage(imageUrl);
  };

  const handleBookNow = () => {
    navigate('/booking-summary');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        setSelectedImage(null);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const today = new Date();
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  const isDateEnabled = (date) => {
    return date >= dayAfterTomorrow;
  };

  return (
    <div style={{ 
      backgroundImage: "url('/MESS1.jpg')", 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundColor: 'rgba(255, 255, 255, 0.4)', 
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h2 style={{ textAlign: 'center', color: 'white', padding: '10px' }}>MEAL SELECTION</h2>

      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '10px', color: 'white' }}>Select Date</h3>
        <DatePicker 
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          minDate={dayAfterTomorrow}
          filterDate={isDateEnabled}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
        {meals.map(meal => (
          <div key={meal.id} style={{ border: '1px solid #ccc', padding: '50px', borderRadius: '10px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
            <h3>{meal.name}</h3>
            <button onClick={() => handleViewMenu(meal.id)} style={{ backgroundColor: 'red', color: 'white' }}>View Menu</button>
            <br />
            <br />
            <button onClick={handleBookNow} style={{ backgroundColor: 'red', color: 'white' }}>Book Now</button>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div style={{ 
          position: 'fixed', 
          top: '0', 
          left: '0', 
          width: '100%', 
          height: '100%', 
          zIndex: '100', 
          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Menu" style={{ maxWidth: '80%', maxHeight: '80%' }} />
        </div>
      )}
    </div>
  );
};

export default MealSelection;
