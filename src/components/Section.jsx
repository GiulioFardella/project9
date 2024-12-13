import React from 'react';
import Card from './Card';

const Section = ({ title, tracks, onAddFavorite }) => {
  return (
    <section>
      <h3>{title}</h3>
      <div className="row">
        {tracks.map((track) => (
          <div key={track.id} className="col-12 col-md-4">
            <Card track={track} onAddFavorite={onAddFavorite} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
