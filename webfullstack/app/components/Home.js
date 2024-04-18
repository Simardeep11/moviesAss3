import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/mongodb');
      setData(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div className='text-center mx-auto max-w-4xl'>
      <h1 className='m-4 text-3xl font-bold text-gray-900'>Home Page</h1>
      <h2 className='mb-4 text-2xl text-gray-800'>MongoDB Data:</h2>
      <ul className='list-disc list-inside bg-white rounded-lg p-6'>
        {data.map((movie, index) => (
          <li key={index} className='border-b last:border-none py-4'>
            <strong>Title:</strong> {movie.title}<br />
            <strong>Actors:</strong> {movie.actors.join(', ')}<br />
            <strong>Release Year:</strong> {movie.release_year}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
