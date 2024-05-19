# Restaurant Reservation App

This is a React-based web application that allows users to book a table at a restaurant. It features a booking form where users can select a date, time, number of guests, and the occasion for their reservation. The app also displays available reservation times based on the selected date and updates the availability in real-time as bookings are made.

## Features

- **Booking Form**: Users can fill out a form to book a table for a specific date, time, number of guests, and occasion.
- **Available Times Display**: The app fetches and displays available reservation times for the selected date, taking into account already booked times.
- **Real-time Updates**: As users book reservations, the available times list is updated in real-time to reflect the booked times.
- **Booking Confirmation**: After submitting the form, users are navigated to a confirmation page that displays the details of their reservation.
- **Form Validation**: The booking form includes both HTML5 and client-side validation using React to ensure that users provide valid input data before submitting the form.
- **User Experience Improvements**: The app includes features like disabling the submit button during form submission and displaying error messages for better user experience.

## Technologies Used

- **React**: The app is built using the React library for building user interfaces.
- **React Hooks**: The app utilizes various React hooks, including `useState`, `useEffect`, and `useReducer`, for managing state and side effects.
- **React Router**: The routing functionality is implemented using the `react-router-dom` library, allowing navigation between different pages within the application.
- **Mock API**: The app uses a mock API to simulate fetching available times and submitting reservation data.
- **Jest and React Testing Library**: Unit tests for components and utility functions are implemented using Jest and the React Testing Library.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-repo/restaurant-reservation-app.git`
2. Navigate to the project directory: `cd restaurant-reservation-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the app in your browser at `http://localhost:3000`

## Testing

The app includes unit tests for components and utility functions. To run the tests, use the following command:

This will run all the tests and display the test coverage report.

## API Integration

The app currently uses a mock API to simulate fetching available times and submitting reservation data. However, you can integrate a real API by updating the `fetchAPI` and `submitAPI` functions in the `Main` component.
## Results:
![image](https://github.com/JoydELC/capstone-little-lemon/assets/115313115/da01813c-6d6f-4b6c-80a3-909c986512c4)
![image](https://github.com/JoydELC/capstone-little-lemon/assets/115313115/3222d0bc-d58c-4e11-bcc7-9603731184db)
![image](https://github.com/JoydELC/capstone-little-lemon/assets/115313115/bb30398e-60bb-4719-8e75-deacd3d39ed9)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
