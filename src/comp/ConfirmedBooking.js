import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmedBooking = () => {
  const location = useLocation();
  const formData = location.state;

  return (
    <div className="confirmed-booking">
      <h1>Booking Confirmed</h1>
      <p>Your reservation has been successfully booked.</p>
      {formData && (
        <div className="reservation-details">
          <h2>Reservation Details:</h2>
          <p>
            <strong>Date:</strong> {formData.date}
          </p>
          <p>
            <strong>Time:</strong> {formData.time}
          </p>
          <p>
            <strong>Number of Guests:</strong> {formData.guests}
          </p>
          <p>
            <strong>Occasion:</strong> {formData.occasion}
          </p>
        </div>
      )}
    </div>
  );
};

export default ConfirmedBooking;