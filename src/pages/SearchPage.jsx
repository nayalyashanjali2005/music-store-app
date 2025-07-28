import React, { useState, useEffect } from 'react';
import { Search } from '../components/Search';
import { Songs } from '../components/Songs';
import { getSongs } from '../services/api-client';
import { Player } from '../components/Player';

export const SearchPage = () => {
  const [allSongs, setSongs] = useState([]);
  const [flag, setFlag] = useState(false);
  const [song, setPlayerSong] = useState(null);

  const loadSongs = async () => {
    setSongs(await getSongs('Latest Songs'));
  };

  useEffect(() => {
    loadSongs();
  }, []);

  const togglePlayer = (flag, songarg) => {
    setPlayerSong(songarg);
    setFlag(flag);
  };

  const getArtistName = async (artistName) => {
    const songs = await getSongs(artistName);
    setSongs(songs);
  };

  return (
    <div className="container my-4">
      <div className="text-center mb-4">
        <h1 className="display-4 text-primary fw-bold">🎵 Music Store</h1>
        <p className="lead text-muted">Search and explore songs by your favorite artists</p>
      </div>
      {!flag ? (
        <>
          <div className="card shadow p-4 mb-4">
            <Search fn={getArtistName} />
          </div>
          <Songs fn={togglePlayer} allSongs={allSongs} />
        </>
      ) : (
        <Player fn={togglePlayer} song={song} />
      )}
    </div>
  );
};
