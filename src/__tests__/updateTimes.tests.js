// __tests__/updateTimes.tests.js
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from '../Main';

jest.mock('../Main', () => ({
  fetchAPI: jest.fn((date) => {
    const times = ['17:00', '18:00', '19:00'];
    return times.filter((time) => !date.bookedTimes.includes(time));
  }),
}));

test('updateTimes fetches available times excluding booked times', async () => {
  const { container } = render(<Main />);

  const dateInput = screen.getByLabelText('Choose Date:');
  const timesSelect = await screen.findByLabelText('Choose time:');
  const submitButton = screen.getByText('Make Your reservation');

  fireEvent.change(dateInput, { target: { value: '2023-05-19' } });
  userEvent.selectOptions(timesSelect, ['18:00']);
  userEvent.click(submitButton);

  const updatedTimesSelect = await screen.findByLabelText('Choose time:');
  const availableTimes = updatedTimesSelect.options.map((option) => option.text);

  expect(availableTimes).toEqual(['17:00', '19:00']);
});