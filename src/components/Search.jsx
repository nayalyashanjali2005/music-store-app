import { useRef } from "react";

export const Search = ({ fn }) => {
  const artist = useRef();

  return (
    <div className="row align-items-center">
      <div className="col-md-9">
        <input
          ref={artist}
          type="text"
          className="form-control form-control-lg"
          placeholder="Type artist name (e.g., Coldplay, Adele)"
        />
      </div>
      <div className="col-md-3 text-end mt-2 mt-md-0">
        <button
          className="btn btn-success btn-lg w-100"
          onClick={() => fn(artist.current.value)}
        >
          🔍 Search
        </button>
      </div>
    </div>
  );
};
