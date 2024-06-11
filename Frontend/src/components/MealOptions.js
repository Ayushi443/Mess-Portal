import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MealOptions = () => {
  const { selectedDate } = useParams();
  const [meals, setMeals] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image URL
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
    const menuImage = `/menu${messNumber}.jpg`;
    setSelectedImage(menuImage);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleBookNow = () => {
    navigate('/BookingSummary'); // Navigate to BookingSummary.js
  };

  const buttonStyle = {
    marginBottom: '10px',
    width: '50%',
    padding: '10px',
    backgroundColor: '#6495ED',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: 'darkblue'
  };

  return (
    <div style={{
      backgroundImage: "url('/MESS1.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2 style={{ marginTop: '20px', marginBottom:'20px' }}>Select meal for {selectedDate}</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          width: '30%',
          textAlign: 'center',
          margin: '10px'
        }}>
          <h2>Mess 1</h2>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '200px', alignItems: 'center' }}>
            <button
              onClick={() => handleViewMenu(1)}
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
              View Menu
            </button>
            <button
              onClick={handleBookNow} // Call handleBookNow on click
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
              Book Now
            </button>
          </div>
        </div>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          width: '30%',
          textAlign: 'center',
          margin: '10px'
        }}>
          <h2>Mess 2</h2>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '200px', alignItems: 'center' }}>
            <button
              onClick={() => handleViewMenu(2)}
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
              View Menu
            </button>
            <button
              onClick={handleBookNow} // Call handleBookNow on click
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
              Book Now
            </button>
          </div>
        </div>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          width: '30%',
          textAlign: 'center',
          margin: '10px'
        }}>
          <h2>Mess 3</h2>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '200px', alignItems: 'center' }}>
            <button
              onClick={() => handleViewMenu(3)}
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
              View Menu
            </button>
            <button
              onClick={handleBookNow} // Call handleBookNow on click
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '10px',
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Menu" style={{ maxWidth: '70%', maxHeight: '70%' }} />
            <button
              onClick={handleCloseModal}
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealOptions
