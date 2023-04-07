import { faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PlaylistSong1 = ({ favoritesArr, setSong, removeFromFavorites }) => {
  return (
    <div className="favorites-list">
      {favoritesArr.map((song, index) => (
        <div key={song.id} className="song-container">
          <div className="song-wrap" onClick={() => setSong(song)}>
            <span>{index + 1}.</span>
            <div className="image-wrapper">
              <img src={song.img} alt="band" />
            </div>
            <div className="title-wrap">
              <h4>{song.name}</h4>
              <h5>{song.singer}</h5>
            </div>
          </div>
          <button
            className="remove-btn"
            onClick={() => removeFromFavorites(index)}
          >
            <FontAwesomeIcon icon={faSquareMinus} size="lg" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlaylistSong1;
