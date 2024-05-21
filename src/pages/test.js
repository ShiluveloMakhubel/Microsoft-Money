import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/all'); // Adjust the endpoint here
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from MongoDB</h1>
      <ul>
      
        {data.map(item => (
          
          
          <li >{item.name}</li>
          
        ))}
      </ul>
    </div>
  );
};

export default Test;
