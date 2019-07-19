import { returnDate } from './date';

describe('date helper function', () => {

  it('date string should be converted into a new date object', () => {
    const incomingDateString = returnDate('2019.02.19').toString();
    expect(incomingDateString).toContain('Tue Feb 19 2019 00:00:00');
  });

  it('check for Invalid Date', () => {
    const incomingDateString = returnDate('2019.00').toString();
    expect(incomingDateString).toBe('Invalid Date');
  });
});
