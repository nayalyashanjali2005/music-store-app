import React from 'react';

export const Player = ({ song, fn }) => {
  return (
    <div className="text-center">
      <h2 className="text-primary">{song.trackName}</h2>
      <h5 className="text-muted mb-3">{song.artistName}</h5>
      <img
        src={song.artworkUrl100}
        alt={song.trackName}
        className="img-fluid rounded shadow mb-3"
      />
      <div>
        <audio controls autoPlay className="w-100">
          <source src={song.previewUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <button className="btn btn-outline-secondary mt-4" onClick={() => fn(false, null)}>
        ⬅️ Back to Songs
      </button>
    </div>
  );
};
