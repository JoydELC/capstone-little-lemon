// __tests__/Main.test.js
import { initializeTimes, updateTimes } from '../comp/Main';

describe('Main component functions', () => {
  test('initializeTimes returns the correct initial value', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });

  test('updateTimes returns the same value as the provided state', () => {
    const testDate = '2023-05-20';
    const updatedTimes = updateTimes(testDate);
    expect(updatedTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });
});