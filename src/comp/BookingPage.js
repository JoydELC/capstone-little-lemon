import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, submitForm }) => {
    return (
        <div>
            <h1>Book your table</h1>
            <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
        </div>
    );
};

export default BookingPage;
