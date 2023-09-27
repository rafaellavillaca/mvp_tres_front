import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quote() {

  const [quote, setQuote] = useState({});

  useEffect(() => {
    axios.post('http://localhost:8000/quote', {})
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setQuote(data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className>
      <p>Quote: {quote.quote}, Author: {quote.author} </p>

    </div>
  );
}

export default Quote;