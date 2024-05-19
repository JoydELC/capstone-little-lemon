import React, { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, submitForm }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormErrors({});
  }, [formData]);

  const isFormValid = () => {
    let errors = {};
    let isValid = true;

    if (!formData.date) {
      errors.date = 'Please select a date';
      isValid = false;
    }

    if (!formData.time) {
      errors.time = 'Please select a time';
      isValid = false;
    }

    if (!formData.guests || formData.guests < 1 || formData.guests > 10) {
      errors.guests = 'Please enter a number between 1 and 10';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setIsSubmitting(true);
      try {
        await submitForm(formData);
      } catch (error) {
        console.error('Error submitting form:', error);
        setFormErrors({ general: 'An error occurred while submitting the form. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose Date:</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        required
      />
      {formErrors.date && <span className="error">{formErrors.date}</span>}

      <label htmlFor="res-time">Choose time:</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleInputChange}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {formErrors.time && <span className="error">{formErrors.time}</span>}

      <label htmlFor="guests">Number of guests:</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleInputChange}
        required
      />
      {formErrors.guests && <span className="error">{formErrors.guests}</span>}

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleInputChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value={isSubmitting ? 'Submitting...' : 'Make Your reservation'}
        disabled={isSubmitting}
      />
      {formErrors.general && <span className="error">{formErrors.general}</span>}
    </form>
  );
};

export default BookingForm;