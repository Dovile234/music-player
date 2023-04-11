import React from "react";
import { songsArr } from "./MusicList";
import heart from "../assets/img/heart.svg";

const Recommended = ({ addToFavorites, setSong, page }) => {
  return (
    <div
      className={
        page === "recommended" ? "recommended-songs-page" : "recommended-songs"
      }
    >
      <h2>Recommended Songs</h2>
      {songsArr.map((song) => (
        <div key={song.id} className="recommended-song-wrapper">
          <div className="recommended-song" onClick={() => setSong(song)}>
            <div className="image-wrapper">
              <img src={song.img} alt="band" />
            </div>
            <div className="title-wrap">
              <h4>{song.name}</h4>
              <h5>{song.singer}</h5>
            </div>
          </div>
          <button onClick={() => addToFavorites(song.id)}>
            <img id="heart" src={heart} alt="favorite" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
