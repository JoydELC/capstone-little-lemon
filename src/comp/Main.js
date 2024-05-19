// Main.js
import React, { useReducer, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import Page from './Page';
import ConfirmedBooking from './ConfirmedBooking';

// Function to fetch initial times
const fetchAPI = (date, bookedTimes) => {
    const result = [];
    const random = seededRandom(date.getDate());
  
    const times = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'];
  
    times.forEach((time) => {
      if (random() < 0.5 && !bookedTimes.includes(time)) {
        result.push(time);
      }
    });
  
    console.log("Available times:", result);
    return result;
  };

// Function to generate seeded random number
const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => {
    return (s = (s * a) % m) / m;
  };
};

// Initial state
const initialState = {
  availableTimes: [],
  bookedTimes: []
};

// Reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      console.log("Updating times...");
      return { ...state, availableTimes: fetchAPI(action.payload, state.bookedTimes) };
    case 'BOOK_TIME':
      console.log("Booking time:", action.payload);
      return { ...state, bookedTimes: [...state.bookedTimes, action.payload] };
    default:
      return state;
  }
};

function Main() {
  const [state, dispatch] = useReducer(timesReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch initial times
    dispatch({ type: 'UPDATE_TIMES', payload: new Date() });
    // Update times every minute
    const interval = setInterval(() => {
      dispatch({ type: 'UPDATE_TIMES', payload: new Date() });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Function to handle form submission
  const submitForm = (formData) => {
    console.log('Form data:', formData);
    // Simulate API call to submit the form data
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      dispatch({ type: 'BOOK_TIME', payload: formData.time });
      navigate('/confirmed', { state: formData }); // Pass form data to the confirmation page
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/Booking" element={<BookingPage availableTimes={state.availableTimes} submitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

// Simulating the API call for submitting the form data
const submitAPI = (formData) => {
  // Simulate a delay to mimic an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate a successful submission
      console.log('Form data submitted:', formData);
      resolve(true);
    }, 2000);
  });
};

export default Main;