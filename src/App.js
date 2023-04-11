import { useEffect, useState } from "react";
import "./App.css";
import BottomSection from "./components/BottomSection";
import LeftMenu from "./components/LeftMenu";
import Main from "./components/Main";
import { songsArr } from "./components/MusicList";

function App() {
  const [song, setSong] = useState(songsArr[0]);
  const [favoritesArr, setFavoritesArr] = useState([]);
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [page, setPage] = useState("main");
  const [genre, setGenre] = useState("");
  const [aside, setAside] = useState(false);

  useEffect(() => {
    setFavoritesArr(favoritesList);
    setTriggerUpdate(false);
  }, [triggerUpdate]);

  let favoritesList = JSON.parse(localStorage.getItem("favorites"));

  localStorage.setItem("songs", JSON.stringify(songsArr));
  if (!localStorage.getItem("favorites")) {
    localStorage.setItem("favorites", "[]");
  }

  let songs = JSON.parse(localStorage.getItem("songs"));

  const addToFavorites = (id) => {
    let favorites = songs.find((song) => song.id === id);

    if (favoritesList.length === 0) {
      favoritesList.push(favorites);
    } else {
      let res = favoritesList.find((item) => item.id === id);
      if (res === undefined) {
        favoritesList.push(favorites);
      }
    }

    localStorage.setItem("favorites", JSON.stringify(favoritesList));

    setTriggerUpdate(true);
  };

  const removeFromFavorites = (i) => {
    favoritesArr.splice(i, 1);
    localStorage.setItem("favorites", JSON.stringify(favoritesArr));
    setTriggerUpdate(true);
  };

  return (
    <div className="App">
      <div className="container">
        <LeftMenu
          favoritesArr={favoritesArr}
          setSong={setSong}
          removeFromFavorites={removeFromFavorites}
          setPage={setPage}
          setGenre={setGenre}
          aside={aside}
          setAside={setAside}
        />
        <Main
          addToFavorites={addToFavorites}
          favoritesList={favoritesList}
          setSong={setSong}
          page={page}
          setPage={setPage}
          setGenre={setGenre}
          genre={genre}
          setAside={setAside}
        />
        <BottomSection
          song={song}
          addToFavorites={addToFavorites}
          setSong={setSong}
          songs={songs}
        />
      </div>
      <div className="background"></div>
    </div>
  );
}

export default App;
