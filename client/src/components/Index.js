import React, { useState } from 'react';
import SearchBar from './search/SearchBar';
import SearchFilters from './search/SearchFilters';
import SearchResults from './search/SearchResults';
import '../styles/index.css';

function Index() {
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <SearchBar onSearch={setSearchResults} filters={filters} />
      <SearchFilters onFilterChange={handleFilterChange} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default Index;
