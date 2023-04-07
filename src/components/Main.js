import {
  faArrowLeft,
  faArrowRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Genres from "./Genres";
import Recommended from "./Recommended";
import { genresArr } from "../components/MusicList";
import SongsResults from "./SongsResults";

const Main = ({ setSong, addToFavorites, page, setGenre, genre }) => {
  const scrollRightHandler = () => {
    document.querySelector(".genres").scrollLeft += 330;
  };
  const scrollLeftHandler = () => {
    document.querySelector(".genres").scrollLeft -= 330;
  };

  return (
    <div className="main">
      {page === "main" && (
        <div>
          <div className="genres-wrap">
            <div className="all-genres-wrap">
              <h2>Genres</h2>
              <div className="arrow-btn">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  id="left"
                  onClick={scrollLeftHandler}
                />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  id="right"
                  onClick={scrollRightHandler}
                />
              </div>
            </div>
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
              {/* <div className="genre-wrapper">
                <h4>Pop</h4>
              </div>
              <div className="genre-wrapper">
                <h4>Rock</h4>
              </div>
              <div className="genre-wrapper">
                <h4>Indie rock</h4>
              </div>
              <div className="genre-wrapper">
                <h4>Jazz</h4>
              </div>
              <div className="genre-wrapper">
                <h4>Electronic</h4>
              </div>
              <div className="genre-wrapper">
                <h4>Punk</h4>
              </div>
              <div className="genre-wrapper">
                <h4>Indie Pop</h4>
              </div>
              <div className="genre-wrapper">
                <h4>Synthwave</h4>
              </div>
              <div className="genre-wrapper">
                <h4>Ambient</h4>
              </div>
              <div className="genre-wrapper">
                <h4>Alternative</h4>
              </div>
              <div className="genre-wrapper">
                <h4>Chill</h4>
              </div> */}
            </div>
          </div>
          {page === "main" && genre === "" && (
            <Recommended setSong={setSong} addToFavorites={addToFavorites} />
          )}
        </div>
      )}
      {page === "genres" && genre === "" && <Genres setGenre={setGenre} />}
      {page === "recommended" && (
        <Recommended
          setSong={setSong}
          addToFavorites={addToFavorites}
          page={page}
        />
      )}
      {genre && <SongsResults genre={genre} />}
    </div>
  );
};

export default Main;
