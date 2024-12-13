import React from 'react';

const Card = ({ track, onAddFavorite }) => {
  return (
    <div className="card">
      <img src={track.album.cover_medium} className="card-img-top" alt={track.title} />
      <div className="card-body">
        <h5 className="card-title">{track.title}</h5>
        <p className="card-text">{track.artist.name}</p>
        <button className="btn btn-primary" onClick={() => onAddFavorite(track)}>
          Aggiungi ai Preferiti
        </button>
      </div>
    </div>
  );
};

export default Card;
