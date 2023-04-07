import React from "react";
import waves from "../assets/img/sound-waves.png";
import PlaylistSong from "./PlaylistSong1";

const LeftMenu = ({
  favoritesArr,
  setSong,
  removeFromFavorites,
  setPage,
  setGenre,
}) => {
  const pageHandler = (id) => {
    setPage(id);
    setGenre("");
  };

  return (
    <aside className="aside">
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
