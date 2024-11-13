import React from 'react';
import MediaCard from '../ui/MediaCard'; // Importar el componente MovieCard
import '../../styles/mediacard.css';
function SearchResults({ results }) {
  return (
    <div className="search-results"> {/* Añadir un contenedor para los resultados */}
      {results.map((result) => (
        <MediaCard key={result.id} media={result} /> // Renderizar MovieCard para cada resultado
      ))}
    </div>
  );
}

export default SearchResults;