export const fetchTracks = async (rock) => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${rock}`);
    const data = await response.json();
    return data.data; // Restituisce solo i dati relativi alle tracce
  };
  