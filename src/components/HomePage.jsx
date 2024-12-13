import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTracks } from '../services/APIHandler';
import Section from './Section';

const HomePage = () => {
  const [tracks, setTracks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTracks = async () => {
      const data = await fetchTracks('queen');
      setTracks(data);
    };
    loadTracks();
  }, []);

  const handleAddFavorite = (track) => {
    dispatch({ type: 'ADD_FAVORITE', payload: track });
  };

  return (
    <div>
      <Section title="Nuove Uscite" tracks={tracks} onAddFavorite={handleAddFavorite} />
    </div>
  );
};

export default HomePage;
