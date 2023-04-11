import React from "react";
import { genresArr } from "../components/MusicList";

const Genres = ({ setGenre }) => {
  return (
    <div className="genres-container">
      <h2>Genres</h2>
      <div className="genres-page-wrapper">
        <div className="genres">
          {genresArr.map((genre, index) => (
            <div
              key={index}
              className="genre-wrapper"
              onClick={() => setGenre(genre.name)}
            >
              <h4>{genre.name}</h4>
            </div>
          ))}

          {/* <div className="genre-wrapper" onClick={() => setGenre("rock")}>
          <h4>Rock</h4>
        </div>
        <div className="genre-wrapper" onClick={() => setGenre("indierock")}>
          <h4>Indie rock</h4>
        </div>
        <div className="genre-wrapper" onClick={() => setGenre("jazz")}>
          <h4>Jazz</h4>
        </div>
        <div className="genre-wrapper" onClick={() => setGenre("electronic")}>
          <h4>Electronic</h4>
        </div>
        <div className="genre-wrapper" onClick={() => setGenre("punk")}>
          <h4>Punk</h4>
        </div>
        <div className="genre-wrapper" onClick={() => setGenre("indiepop")}>
          <h4>Indie Pop</h4>
        </div>
        <div className="genre-wrapper" onClick={() => setGenre("synthwave")}>
          <h4>Synthwave</h4>
        </div>
        <div className="genre-wrapper" onClick={() => setGenre("ambient")}>
          <h4>Ambient</h4>
        </div>
        <div className="genre-wrapper" onClick={() => setGenre("alternative")}>
          <h4>Alternative Rock</h4>
        </div>
        <div className="genre-wrapper" onClick={() => setGenre("chill")}>
          <h4>Chill</h4>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Genres;
