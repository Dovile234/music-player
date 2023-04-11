import {
  faBackwardStep,
  faForwardStep,
  faHeart,
  faPause,
  faPlay,
  faRepeat,
  faVolumeMute,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import heart from "../assets/img/heart.svg";

const BottomSection = ({ song, addToFavorites, songs, setSong }) => {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(true);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  const volumeRef = useRef();

  const handleMetadata = () => {
    let seconds = Math.floor(audioPlayer.current.duration % 60);
    let minutes = Math.floor(audioPlayer.current.duration / 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    let time = minutes + ":" + seconds;
    setDuration(time);
  };

  const handleVolume = (e) => {
    audioPlayer.current.volume = e.target.value / 100;
  };

  const playHandler = () => {
    const prevValue = play;
    if (!prevValue) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value =
      (audioPlayer.current.currentTime * 100) / audioPlayer.current.duration;

    ChangeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const ChangeCurrentTime = () => {
    let currentMinutes = Math.floor(audioPlayer.current.currentTime / 60);
    let currentSeconds = Math.floor(audioPlayer.current.currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }

    let currentTime = currentMinutes + ":" + currentSeconds;
    setCurrent(currentTime);
  };

  const changeProgress = () => {
    let sliderPosition =
      (progressBar.current.value * audioPlayer.current.duration) / 100;
    audioPlayer.current.currentTime = sliderPosition;

    ChangeCurrentTime();
  };
  const preSongHandler = () => {
    if (song.id > 0) {
      setPlay(true);

      let res = songs.find((item) => item.id == song.id - 1);
      setSong(res);
    }
    setPlay(true);
  };

  const nextSongHandler = () => {
    if (song.id < songs.length - 1) {
      let res = songs.find((item) => item.id == song.id + 1);
      setSong(res);
    } else {
      let res = songs.find((item) => item.id == 0);
      setSong(res);
    }
    setPlay(true);
  };

  const muteHandler = () => {
    setMute(!mute);
    if (mute) {
      audioPlayer.current.volume = 0;
      volumeRef.current.value = 0;
    } else {
      audioPlayer.current.volume = 0.5;
      volumeRef.current.value = 50;
    }
  };

  const autoplayHandler = () => {
    if (autoPlay) {
      if (song.id < songs.length - 1) {
        let res = songs.find((item) => item.id == song.id + 1);
        setSong(res);
      } else {
        let res = songs.find((item) => item.id == 0);
        setSong(res);
      }
      setPlay(true);
    } else {
      setPlay(false);
    }
  };

  const autoplaySwitchHandler = () => {
    if (autoPlay === false) {
      setAutoPlay(true);
    } else {
      setAutoPlay(false);
    }
  };

  useEffect(() => {
    if (play === true) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }, [play, nextSongHandler, preSongHandler, autoplaySwitchHandler]);

  return (
    <section className="bottom">
      <audio
        src={song.path}
        preload="metadata"
        ref={audioPlayer}
        onLoadedMetadata={handleMetadata}
        onEnded={autoplayHandler}
      ></audio>
      <div className="bottom-image-wrap">
        <div
          className="image-wrap"
          style={{ backgroundImage: `url(${song.img})` }}
        >
          {/* <img id="track-image" src={song.img} alt="band" /> */}
        </div>
        <div className="title-wrap">
          <h4 id="title">{song.name}</h4>
          <p id="artist">{song.singer}</p>
        </div>
      </div>
      <nav className="middle">
        <button id="pre" onClick={() => preSongHandler()}>
          <FontAwesomeIcon icon={faBackwardStep} size="2xl" />
        </button>
        <button id="play" onClick={playHandler}>
          {!play ? (
            <FontAwesomeIcon icon={faPlay} size="2xl" />
          ) : (
            <FontAwesomeIcon icon={faPause} size="2xl" />
          )}
        </button>
        <button id="next" onClick={() => nextSongHandler()}>
          <FontAwesomeIcon icon={faForwardStep} size="2xl" />
        </button>
      </nav>
      <div className="buttons-wrap-mobile">
        <button className="auto-mobile" onClick={autoplaySwitchHandler}>
          <FontAwesomeIcon
            icon={faRepeat}
            size="xl"
            id={autoPlay === true ? "active" : ""}
          />
        </button>
        <button
          className="addToFav-mobile"
          onClick={() => addToFavorites(song.id)}
        >
          <img className="heart" src={heart} alt="favorite" />
        </button>
      </div>
      <div className="duration-wrap">
        <span className="current">{current}</span>
        <div className="duration">
          <input
            type="range"
            defaultValue="0"
            id="duration_slider"
            ref={progressBar}
            onChange={(e) => changeProgress(e)}
          />
        </div>
        <span className="final">{duration && !NaN ? duration : "0.00"}</span>
      </div>

      <div className="volume">
        <input
          type="range"
          defaultValue="90"
          min="0"
          max="100"
          onClick={(e) => handleVolume(e)}
          id="volume"
          ref={volumeRef}
        />

        <button className="mute" onClick={muteHandler}>
          {mute ? (
            <FontAwesomeIcon icon={faVolumeHigh} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faVolumeMute} id="volume-icon" size="lg" />
          )}
        </button>
      </div>
      <div className="buttons-wrap">
        <button id="auto" onClick={autoplaySwitchHandler}>
          <FontAwesomeIcon
            icon={faRepeat}
            size="xl"
            id={autoPlay === true ? "active" : ""}
          />
        </button>
        <button className="addToFav" onClick={() => addToFavorites(song.id)}>
          <img id="heart" src={heart} alt="favorite" />
        </button>

        <div className="animation">
          <div className={play ? "wave active1" : "wave"} id="wave">
            <div className="wave1"></div>
            <div className="wave1"></div>
            <div className="wave1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
