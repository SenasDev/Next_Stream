import React, { useState } from 'react';

function SearchBar({ onSearch, filters }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!query) return;

    try {
      const params = new URLSearchParams({ q: query, ...filters });
      const response = await fetch(`http://localhost:5001/api/search?${params.toString()}`);
      const data = await response.json();
      onSearch(data);
    } catch (error) {
      console.error('Error al buscar:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie or show..."
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;