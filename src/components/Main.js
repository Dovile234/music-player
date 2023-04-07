import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Genres from "./Genres";
import Recommended from "./Recommended";
import { genresArr } from "../components/MusicList";
import SongsResults from "./SongsResults";

const Main = ({ setSong, addToFavorites, page, setGenre, genre, setPage }) => {
  const scrollRightHandler = () => {
    document.querySelector(".genres").scrollLeft += 330;
  };
  const scrollLeftHandler = () => {
    document.querySelector(".genres").scrollLeft -= 330;
  };

  return (
    <div className="main">
      {page === "main" && genre === "" && (
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
      {genre && (
        <SongsResults
          genre={genre}
          setSong={setSong}
          addToFavorites={addToFavorites}
          setGenre={setGenre}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default Main;
