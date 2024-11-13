import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MediaCard({ media }) {
  const title = media.media_type === 'tv' ? media.name : media.title;
  const mediaType = media.media_type === 'tv' ? 'Serie' : 'Película';
  const [showFullOverview, setShowFullOverview] = useState(false);
  const overview = media.overview;
  const maxChars = 500;

  const truncatedOverview = overview.length > maxChars
    ? `${overview.substring(0, maxChars)}...`
    : overview;

  const toggleOverview = () => {
    setShowFullOverview(!showFullOverview);
  };


  return (
    <div className="media-card">
      <div className="media-main">

        <img
          src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt={title} className="media-poster" />
        <div className="media-rating">
          <span>{media.vote_average.toFixed(2)}</span>
        </div>
      </div>
      <div className="media-info">
        <Link to={`/media/${media.id}?type=${media.media_type}`}>
          <h3>{title} ({mediaType})</h3>
        </Link>
        <p className="media-overview">
          {showFullOverview ? overview : truncatedOverview}
          {overview.length > maxChars && (
            <button onClick={toggleOverview} className="read-more-button">
              {showFullOverview ? 'Leer menos' : 'Leer más'}
            </button>
          )}
        </p>
      </div>
    </div>


  );
}

export default MediaCard;