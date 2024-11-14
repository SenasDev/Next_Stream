import React from 'react';
import MediaCard from '../ui/MediaCard';
import '../../styles/mediacard.css';

function SearchResults({ results }) {
  const sortedResults = [...results].sort((a, b) => b.vote_average - a.vote_average);

  return (
    <div className="search-results">
      {sortedResults.map((result) => (
        <MediaCard key={result.id} media={result} />
      ))}
    </div>
  );
}

export default SearchResults;
