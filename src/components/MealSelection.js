import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MealSelection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook to get the navigation function

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
    // Navigate to BookingSummary component
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

  // Function to check if date is after tomorrow
  const isDateEnabled = (date) => {
    return date >= dayAfterTomorrow;
  };

  return (
    <div style={{ 
      backgroundImage: "url('/MESS1.jpg')", 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundColor: 'rgba(255, 255, 255, 0.4)', 
      minHeight: '80vh',
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
        <div style={{ border: '1px solid #ccc', padding: '50px', borderRadius: '10px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
          <h3>Mess 1</h3>
          <button onClick={() => handleViewMenu(1)} style={{ backgroundColor: 'red', color: 'white' }}>View Menu</button>
          <br />
          <br />
          <button onClick={handleBookNow} style={{ backgroundColor: 'red', color: 'white' }}>Book Now</button> {/* Update onClick event */}
        </div>

        <div style={{ border: '1px solid #ccc', padding: '50px', borderRadius: '10px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
          <h3>Mess 2</h3>
          <button onClick={() => handleViewMenu(2)} style={{ backgroundColor: 'red', color: 'white' }}>View Menu</button>
          <br />
          <br />
          <button onClick={handleBookNow} style={{ backgroundColor: 'red', color: 'white' }}>Book Now</button> {/* Update onClick event */}
        </div>

        <div style={{ border: '1px solid #ccc', padding: '50px', borderRadius: '10px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
          <h3>Mess 3</h3>
          <button onClick={() => handleViewMenu(3)} style={{ backgroundColor: 'red', color: 'white' }}>View Menu</button>
          <br />
          <br />
          <button onClick={handleBookNow} style={{ backgroundColor: 'red', color: 'white' }}>Book Now</button> {/* Update onClick event */}
        </div>
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
