import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'; // Importar useSearchParams

function MediaDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams(); // Obtener los parámetros de la URL
  const mediaType = searchParams.get('type'); // Obtener el tipo de medio
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const fetchMediaDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/media/${id}?type=${mediaType}`);
        const data = await response.json();
        setMedia(data);
      } catch (error) {
        console.error('Error al obtener los detalles del media:', error);
      }
    };

    fetchMediaDetails();
  }, [id, mediaType]);

  if (!media) {
    return <div>Cargando detalles del media...</div>;
  }
  const providers = media['watch/providers'].results.ES?.flatrate || []; 
  return (
    <div className="media-details"> 
    <div className="poster">
      <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt={media.title} />
    </div>
    <div className="info">
      <h2>{media.title || media.name}</h2> {/* Mostrar title o name */}
      <div className="rating">
        <span>⭐ {media.vote_average}</span> ({media.vote_count} votos)
      </div>
      <p className="overview">{media.overview}</p>
      <div className="providers">
        <h3>Disponible en:</h3>
        <div className="providers-logos">
          {providers.map(provider => (
            <img 
              key={provider.provider_id} 
              src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`} 
              alt={provider.provider_name} 
              title={provider.provider_name} 
            />
          ))}
        </div>
      </div>
      {/* ... otros detalles ... */}
    </div>
  </div>
  );
}

export default MediaDetails;