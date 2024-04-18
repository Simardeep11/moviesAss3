import React, { useState } from 'react';

const AddEntryForm = ({ onAddEntry }) => {
  const [title, setTitle] = useState('');
  const [actors, setActors] = useState('');
  const [releaseYear, setReleaseYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/addEntry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, actors: actors.split(','), release_year: parseInt(releaseYear) }),
    });
    const data = await response.json();
    if (response.ok) {
      onAddEntry(data.entry);
      setTitle('');
      setActors('');
      setReleaseYear('');
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} class="max-w-md mx-auto my-10 p-8 bg-green-100 shadow-md rounded-lg">
      <h1 class="text-xl font-bold mb-6">Add New Entry</h1>
      <div class="mb-4">
        <label class="block text-gray-900 text-sm font-bold mb-2">Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div class="mb-4">
        <label class="block text-gray-900 text-sm font-bold mb-2">Actors:</label>
        <input type="text" value={actors} onChange={(e) => setActors(e.target.value)} required />
      </div>
      <div class="mb-6">
        <label class="block text-gray-900 text-sm font-bold mb-2">Release Year:</label>
        <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
      </div>
      <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit Entry</button>
    </form>
  );
};

export default AddEntryForm;
