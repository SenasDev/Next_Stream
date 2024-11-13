import React, { useState } from 'react';

function SearchFilters({ onFilterChange }) {
  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    onFilterChange({ type: event.target.value });
  };

  return (
    <div>
      <label htmlFor="type">Tipo de contenido:</label>
      <select id="type" value={selectedType} onChange={handleTypeChange}>
        <option value="">Todos</option>
        <option value="movie">Película</option>
        <option value="tv">Serie</option>
      </select>
    </div>
  );
}

export default SearchFilters;