// __tests__/initializeTimes.tests.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from '../Main';

jest.mock('../Main', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00']),
}));

test('initializeTimes fetches available times', async () => {
  render(<Main />);

  const timesSelect = await screen.findByLabelText('Choose time:');
  const availableTimes = timesSelect.options.map((option) => option.text);

  expect(availableTimes).toEqual(['17:00', '18:00', '19:00']);
});