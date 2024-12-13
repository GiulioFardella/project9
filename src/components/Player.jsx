import React from 'react';

const Player = ({ track }) => {
  return (
    <footer className="fixed-bottom bg-dark text-white p-3 d-flex align-items-center justify-content-between">
      {track ? (
        <>
          <div>
            <h6>{track.title}</h6>
            <p className="mb-0">{track.artist.name}</p>
          </div>
          <audio controls src={track.preview} />
        </>
      ) : (
        <p className="mb-0">Seleziona una traccia per riprodurre</p>
      )}
    </footer>
  );
};

export default Player;
