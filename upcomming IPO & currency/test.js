import React from 'react';

import React from 'react';
import { render } from '@testing-library/react';
import ExchangeRateComponent from './ExchangeRateComponent';


const IPOCalendarComponent = ({ upcomingIPOs }) => (
  <div>
    <h2>Upcoming IPO Calendar</h2>
    <ul>
      {upcomingIPOs.map((ipo, index) => (
        <li key={index}>{ipo.companyName} - {ipo.date}</li>
      ))}
    </ul>
  </div>
);

export default IPOCalendarComponent;


test('renders upcoming IPOs', () => {
  const upcomingIPOs = [
    { companyName: 'Company A', date: '2024-01-10' },
    { companyName: 'Company B', date: '2024-01-15' },
  ];

  const { getByText } = render(<IPOCalendarComponent upcomingIPOs={upcomingIPOs} />);

  expect(getByText('Company A - 2024-01-10')).toBeInTheDocument();
  expect(getByText('Company B - 2024-01-15')).toBeInTheDocument();
});



const ExchangeRateComponent = ({ exchangeRates }) => (
  <div>
    <h2>Latest Currency Exchange Rates</h2>
    <ul>
      {Object.entries(exchangeRates).map(([currency, rate]) => (
        <li key={currency}>{currency}: {rate}</li>
      ))}
    </ul>
  </div>
);

export default ExchangeRateComponent;


test('renders latest currency exchange rates', () => {
  const exchangeRates = {
    USD: 1.12,
    EUR: 0.89,
    GBP: 0.75,
  };

  const { getByText } = render(<ExchangeRateComponent exchangeRates={exchangeRates} />);

  expect(getByText('USD: 1.12')).toBeInTheDocument();
  expect(getByText('EUR: 0.89')).toBeInTheDocument();
  expect(getByText('GBP: 0.75')).toBeInTheDocument();
});
