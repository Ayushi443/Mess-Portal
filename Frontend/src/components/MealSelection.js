import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './MealSelection.css';

const MealSelection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [markedDates, setMarkedDates] = useState([]);
  const [hoveredBookings, setHoveredBookings] = useState([]);
  const [hoveredMess, setHoveredMess] = useState([]);
  const [showModal, setShowModal] = useState(false); // Initially hide modal
  const [messOptions, setMessOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('accessToken'); // Assuming the token is stored in localStorage
        const response = await axios.get('http://127.0.0.1:8000/api/bookings/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBookings(response.data);
        const markedDates = response.data.map(booking => new Date(booking.date));
        setMarkedDates(markedDates);
      } catch (error) {
        console.error("There was an error fetching the bookings!", error);
      }
    };
    const fetchMessOptions = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://127.0.0.1:8000/api/mess-options/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setMessOptions(response.data);
      } catch (error) {
        console.error("Error fetching mess options:", error);
      }
    };

    fetchBookings();
    fetchMessOptions();
  }, []);

  const today = new Date();
  const disabledDates = [today, new Date(today.getTime() + 24 * 60 * 60 * 1000)]; // Disable today and tomorrow

  const isDateEnabled = (date) => {
    return !disabledDates.some(disabledDate => date.toDateString() === disabledDate.toDateString());
  };

  const handleDateSelect = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    if (isDateMarked(date)) {
      setHoveredMess([]);
      const bookingsForDate = bookings.filter(booking => booking.date === formattedDate);
      setHoveredBookings(bookingsForDate);
      const messOptionsForDate = bookingsForDate.map(booking => {
        const messOption = messOptions.find(option => option.id === booking.mess_option);
        return messOption ? messOption : null;
      }).filter(Boolean); // Filter out null values
      
      setHoveredMess(messOptionsForDate);
      setShowModal(true); // Show the custom modal when a booked date is selected
    } else {
      navigate(`/meal-options/${formattedDate}`);
    }
  };

  // Custom function to check if a date is marked (booked)
  const isDateMarked = (date) => {
    return markedDates.some(markDate => date.toDateString() === markDate.toDateString());
  };

  // Function to close the modal and navigate to the selected date's meal options
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="meal-selection-container">
      <h2 className="meal-selection-title">MEAL SELECTION</h2>

      <div className="date-picker-container">
        <h3 className="select-date-title">Select Date</h3>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateSelect}
          inline
          minDate={new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000)} // Minimum date two days from now
          filterDate={isDateEnabled}
          highlightDates={markedDates} // Highlight booked dates
          dayClassName={(date) => (isDateMarked(date) ? 'booked-date' : null)} // Apply class to booked dates
        />
      </div>
      {showModal && (
        <div className="custom-modal">
          <div className="modal-content">
            <div style={{display:"flex" , flexDirection:"row-reverse"}}> 
            <span className="close-icon" onClick={handleModalClose}>×</span>
            <h4>Bookings for {hoveredBookings[0]?.date}</h4>
            </div>

            <ul>
              {hoveredMess.map((messOption, index) => (
                <li key={index}>
                  {messOption.name} - {messOption.address}
                </li>
              ))}
            </ul>
            <button onClick={() => {
              const date = new Date(hoveredBookings[0].date);
              const year = date.getFullYear();
              const month = date.getMonth() + 1;
              const day = date.getDate();
          
              const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
              navigate(`/meal-options/${formattedDate}`);
              setShowModal(false);
            }}>
              Book More Mess
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealSelection;
