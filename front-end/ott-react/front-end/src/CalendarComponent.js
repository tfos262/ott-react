// src/CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="calendar ms-2 mt-2">
      <Calendar
        onChange={onChange}
        value={date}
        calendarType="gregory" // Weeks start on Sunday
      />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
}

export default CalendarComponent;