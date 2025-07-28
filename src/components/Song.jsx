import React from 'react';

export const Song = ({ song, fn }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <img
          src={song.artworkUrl100}
          alt={song.trackName}
          className="card-img-top"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{song.trackName}</h5>
          <p className="card-text text-muted">{song.artistName}</p>
          <button
            className="btn btn-primary"
            onClick={() => fn(true, song)}
          >
            ▶️ Play
          </button>
        </div>
      </div>
    </div>
  );
};
