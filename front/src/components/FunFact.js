import React, { useState, useEffect } from 'react';

function FunFact() {

  const [fact, setFact] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/fun_fact')
    .then(res => res.json())
    .then(data =>{
      console.log(data.text)
      //  console.log(data.author)
       console.log(data)
      setFact(data)

    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className>
      <p>Funfact: {fact.text} </p>

    </div>
  );
}

export default FunFact;