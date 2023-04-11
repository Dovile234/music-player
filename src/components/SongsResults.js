import React from "react";
import { songsArr } from "../components/MusicList";
import heart from "../assets/img/heart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SongsResults = ({
  genre,
  setSong,
  addToFavorites,
  setPage,
  setGenre,
}) => {
  const pageHandler = (id) => {
    setPage(id);
    setGenre("");
  };

  return (
    <div className="songs-results-wrapper">
      <button className="back-btn" onClick={() => pageHandler("genres")}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="xs"
          style={{ marginRight: "5px", color: "var(--lighter)" }}
        />
        Back
      </button>
      <h2>{genre}</h2>
      {songsArr.map(
        (song, index) =>
          song.genre === genre && (
            <div key={index} className="songs-results">
              <div className="song" onClick={() => setSong(song)}>
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
          )
      )}
    </div>
  );
};

export default SongsResults;
