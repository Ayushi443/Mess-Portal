import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';  // Import axios
import './MealSelection.css'; // Import the CSS file

const MealSelection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [meals, setMeals] = useState([]);
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

  const today = new Date();
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  const isDateEnabled = (date) => {
    return date >= dayAfterTomorrow;
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split('T')[0];
    navigate(`/meal-options/${formattedDate}`);
  };

  return (
    <div style={{ 
      backgroundImage: "url('/MESS1.jpg')", 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.4)' 
    }}>
      <h2 style={{ textAlign: 'center', color: 'white', padding: '10px' }}>MEAL SELECTION</h2>

      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '10px', color: 'white' }}>Select Date</h3>
        <DatePicker 
          selected={selectedDate}
          onChange={handleDateSelect}
          inline
          minDate={dayAfterTomorrow}
          filterDate={isDateEnabled}
        />
      </div>

      {/* Displaying Meals and selectedImage */}
      <div style={{ textAlign: 'center', color: 'white' }}>
        {meals.length > 0 && (
          <div>
            <h3>Available Meals</h3>
            <ul>
              {meals.map((meal, index) => (
                <li key={index} onClick={() => setSelectedImage(meal.image)}>
                  {meal.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedImage && (
          <div>
            <h3>Selected Meal Image</h3>
            <img src={selectedImage} alt="Selected Meal" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MealSelection;
