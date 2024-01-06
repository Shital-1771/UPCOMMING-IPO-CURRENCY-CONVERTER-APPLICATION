import React, { useEffect, useState } from 'react';

const IPOCalendarComponent = () => {
  const [upcomingIPOs, setUpcomingIPOs] = useState([]);

  useEffect(() => {
    const fetchIPOs = async () => {
      try {
        const response = await fetch('https://example-ipo-api.com/upcoming', {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_IPO_API_KEY}`
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUpcomingIPOs(data);
        } else {
          console.error('Error fetching IPOs');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchIPOs();
  }, []);

  return (
    <div>
      <h2>Upcoming IPO Calendar</h2>
      <ul>
        {upcomingIPOs.map((ipo, index) => (
          <li key={index}>{ipo.companyName} - {ipo.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default IPOCalendarComponent;
