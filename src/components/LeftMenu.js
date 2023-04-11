import React from "react";
import waves from "../assets/img/sound-waves.png";
import PlaylistSong from "./PlaylistSong1";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftMenu = ({
  favoritesArr,
  setSong,
  removeFromFavorites,
  setPage,
  setGenre,
  aside,
  setAside,
}) => {
  const pageHandler = (id) => {
    setPage(id);
    setGenre("");
    setAside(false);
  };

  return (
    <aside className={aside ? "aside active" : "aside"}>
      {aside && (
        <FontAwesomeIcon
          icon={faXmark}
          style={{ color: "white", marginBottom: "15px" }}
          size="2xl"
          onClick={() => setAside(false)}
        />
      )}
      <div className="aside-title">
        <img src={waves} alt="waves" />
        <h3>Music</h3>
      </div>
      <div className="side-menu">
        <h4>Menu</h4>
        <ul>
          <li onClick={() => pageHandler("main")}>Home</li>
          <li onClick={() => pageHandler("genres")}>Genres</li>
          <li onClick={() => pageHandler("recommended")}>Recommended</li>
        </ul>
      </div>
      <div className="favorites-container">
        <h4>My Playlist</h4>
        {favoritesArr && favoritesArr.length > 0 ? (
          <PlaylistSong
            favoritesArr={favoritesArr}
            setSong={setSong}
            removeFromFavorites={removeFromFavorites}
          />
        ) : (
          <h3 className="no-songs">No songs yet</h3>
        )}
      </div>
    </aside>
  );
};

export default LeftMenu;
