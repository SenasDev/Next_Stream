import React, { useState } from 'react';

function SearchBar({ onSearch, filters }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null); // Estado para el mensaje de error

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Limpiar el mensaje de error al enviar una nueva búsqueda

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setError('Por favor, introduce una búsqueda.'); // Mensaje de error si la consulta está vacía
      return;
    }

    try {
      const params = new URLSearchParams({ q: trimmedQuery, ...filters });
      const response = await fetch(`http://localhost:5001/api/search?${params.toString()}`);
      const data = await response.json();
      onSearch(data);
    } catch (error) {
      console.error('Error al buscar:', error);
      setError('Error al realizar la búsqueda.'); // Mostrar un mensaje de error genérico
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search:</label> 
      <input
        type="text"
        placeholder="Search for a movie or show..."
        className="search-input"
        id="search-input" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" aria-label="Submit search">Search</button>
      {error && <div className="error-message">{error}</div>} {/* Mostrar el mensaje de error si existe */}
    </form>
  );
}

export default SearchBar;