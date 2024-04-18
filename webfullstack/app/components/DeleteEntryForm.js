import React, { useState, useEffect } from 'react';

const DeleteEntryForm = ({ entry, onDeleteEntry, onCancel }) => {
  const [title, setTitle] = useState(entry ? entry.title : '');
  const [actors, setActors] = useState(entry ? entry.actors.join(', ') : '');
  const [releaseYear, setReleaseYear] = useState(entry ? entry.release_year : '');

  useEffect(() => {
    if (entry) {
      setTitle(entry.title);
      setActors(entry.actors.join(', '));
      setReleaseYear(entry.release_year);
    }
  }, [entry]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/movies/${entry._id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onDeleteEntry(entry._id);
      }
    } catch (error) {
      console.error('Error deleting entry:', error.message);
    }
  };

  return (
    <form onSubmit={handleDelete} class="max-w-md mx-auto my-10 p-8 bg-red-100 shadow-md rounded-lg">
      <h1 class="text-xl font-semibold mb-6">Delete Entry</h1>
      <div class="mb-4">
        <label class="block text-gray-900 text-sm font-bold mb-2">Title:</label>
        <input type="text" value={title} disabled class="bg-gray-200" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-900 text-sm font-bold mb-2">Actors:</label>
        <input type="text" value={actors} disabled class="bg-gray-200" />
      </div>
      <div class="mb-6">
        <label class="block text-gray-900 text-sm font-bold mb-2">Release Year:</label>
        <input type="number" value={releaseYear} disabled class="bg-gray-200" />
      </div>
      <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
      <button type="button" onClick={onCancel} class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
    </form>
  );
};

export default DeleteEntryForm;
