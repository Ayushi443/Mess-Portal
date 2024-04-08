import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingSummary = () => {
  const [startDate, setStartDate] = useState(null);

  // Get today's date
  const today = new Date();

  // Calculate the date after tomorrow
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  // Enable dates from the day after tomorrow onwards
  const isDateEnabled = (date) => {
    return date >= dayAfterTomorrow;
  };

 
  
  return (
    <section>
      <h1>Booking Summary</h1>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={dayAfterTomorrow}
        filterDate={isDateEnabled}
        inline
      />
      {/* Display selected meals and additional details */}
    </section>
  );
};

export default BookingSummary;
