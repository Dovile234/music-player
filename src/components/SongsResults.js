import React from "react";
import { songsArr } from "../components/MusicList";

const SongsResults = ({ genre }) => {
  return (
    <div>
      {
        songsArr.map(
          (song, index) =>
            song.genre == genre && (
              <div key={index}>
                <h3>{song.name}</h3>
              </div>
            )
        )
        // let favorites = songsArr.find((song) => song.id == id);
      }
    </div>
  );
};

export default SongsResults;
