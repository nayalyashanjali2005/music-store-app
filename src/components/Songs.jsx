import React from 'react';
import { Song } from './Song';

export const Songs = ({ allSongs, fn }) => {
  return (
    <div className="row">
      {allSongs.length > 0 ? (
        allSongs.map((song, index) => (
          <Song key={index} song={song} fn={fn} />
        ))
      ) : (
        <p className="text-muted text-center mt-4">No songs found. Try another artist.</p>
      )}
    </div>
  );
};
