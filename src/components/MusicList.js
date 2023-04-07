import calexico from "../assets/img/calexico.jpg";
import comtruise from "../assets/img/comtruise.jpg";
import demarco from "../assets/img/demarco.jpg";
import dillon from "../assets/img/dillon.jpg";
import emotionalMess from "../assets/img/emotionalMess.PNG";
import enchelon from "../assets/img/enchelon.jpg";
import fanfarlo from "../assets/img/fanfarlo.png";
import iceandfire from "../assets/img/iceandfire.jpg";
import ladytron from "../assets/img/ladytron.jpg";
import motorama from "../assets/img/motorama.jpg";
import mynabirds from "../assets/img/mynabirds.jpg";
import savior from "../assets/img/savior.jpg";
import summerheart from "../assets/img/summerheart.jpg";
import warondrugs from "../assets/img/warondrugs.jpg";
import arulo from "../assets/img/arulo.jpg";
import diegonava from "../assets/img/diegonava.jpg";

import audio1 from "../assets/audio/Calexico - Para.mp3";
import audio2 from "../assets/audio/Emotional Mess - Amy Lynn & the Honey Men.mp3";
import audio3 from "../assets/audio/Fanfarlo - I'm a Pilot.mp3";
import audio4 from "../assets/audio/Ice & Fire - King Canyon.mp3";
import audio5 from "../assets/audio/Ladytron - White Elephant.mp3";
import audio6 from "../assets/audio/Motorama - Anchor.mp3";
import audio7 from "../assets/audio/Savior - Telecasted.mp3";
import audio8 from "../assets/audio/The Mynabirds - Body of Work.mp3";
import audio9 from "../assets/audio/The War on Drugs - Baby Missiles.mp3";
import audio10 from "../assets/audio/Summer Heart - Please Stay.mp3";
import audio11 from "../assets/audio/Mac DeMarco - Rock and Roll Night Club.mp3";
import audio12 from "../assets/audio/Dillon - Thirteen Thirtyfive.mp3";
import audio13 from "../assets/audio/Com Truise - Cyanide Sisters.mp3";
import audio14 from "../assets/audio/The Echelon Effect - Your First Light My Eventide.mp3";
import audio15 from "../assets/audio/Deep Meditation.mp3";
import audio16 from "../assets/audio/Sleepy Cat.mp3";
import audio17 from "../assets/audio/Serene View.mp3";
import audio18 from "../assets/audio/Beautiful Dream.mp3";

export const songsArr = [
  {
    name: "Para",
    path: audio1,
    img: calexico,
    singer: "Calexico",
    id: 0,
    genre: "indie rock",
  },
  {
    name: "Emotional Mess",
    path: audio2,
    img: emotionalMess,
    singer: "Amy Lynn & the Honey Men",
    id: 1,
    genre: "jazz",
  },
  {
    name: "I'm a Pilot",
    path: audio3,
    img: fanfarlo,
    singer: "Fanfarlo",
    id: 2,
    genre: "alternative rock",
  },
  {
    name: "King Canyon",
    path: audio4,
    img: iceandfire,
    singer: "Ice & Fire",
    id: 3,
    genre: "pop",
  },
  {
    name: "White Elephant",
    path: audio5,
    img: ladytron,
    singer: "Ladytron",
    id: 4,
    genre: "electronic",
  },
  {
    name: "Anchor",
    path: audio6,
    img: motorama,
    singer: "Motorama",
    id: 5,
    genre: "punk",
  },
  {
    name: "Savior",
    path: audio7,
    img: savior,
    singer: "Telecasted",
    id: 6,
    genre: "rock",
  },
  {
    name: "Body of Work",
    path: audio8,
    img: mynabirds,
    singer: "The Mynabirds",
    id: 7,
    genre: "indie pop",
  },
  {
    name: "Baby Missiles",
    path: audio9,
    img: warondrugs,
    singer: "The War on Drugs",
    id: 8,
    genre: "rock",
  },
  {
    name: "Please Stay",
    path: audio10,
    img: summerheart,
    singer: "Summer Heart",
    id: 9,
    genre: "indie pop",
  },
  {
    name: "Rock and Roll Night Club",
    path: audio11,
    img: demarco,
    singer: "Mac DeMarco",
    id: 10,
    genre: "indie rock",
  },
  {
    name: "Thirteen Thirtyfive",
    path: audio12,
    img: dillon,
    singer: "Dillon",
    id: 11,
    genre: "electronic",
  },
  {
    name: "Cyanide Sisters",
    path: audio13,
    img: comtruise,
    singer: "Com Truise",
    id: 12,
    genre: "synthwave",
  },
  {
    name: "Your First Light My Eventide",
    path: audio14,
    img: enchelon,
    singer: "The Echelon Effect",
    id: 13,
    genre: "ambient",
  },
  {
    name: "Deep Meditation",
    path: audio15,
    img: "https://static.wixstatic.com/media/9cdc22_908744a885ec432286c02d848640404f~mv2_d_2560_1440_s_2.png/v1/crop/x_557,y_116,w_1440,h_1324/fill/w_261,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Header_DeadeSea_2.png",
    singer: "Alejandro Magaña",
    id: 14,
    genre: "chill",
  },
  {
    name: "Sleepy Cat",
    path: audio16,
    img: "https://static.wixstatic.com/media/9cdc22_908744a885ec432286c02d848640404f~mv2_d_2560_1440_s_2.png/v1/crop/x_557,y_116,w_1440,h_1324/fill/w_261,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Header_DeadeSea_2.png",
    singer: "Alejandro Magaña",
    id: 15,
    genre: "chill",
  },
  {
    name: "Serene View",
    path: audio17,
    img: arulo,
    singer: "Arulo",
    id: 16,
    genre: "chill",
  },
  {
    name: "Beautiful Dream",
    path: audio18,
    img: diegonava,
    singer: "Diego Nava",
    id: 17,
    genre: "chill",
  },
];

export const genresArr = [
  {
    name: "pop",
  },
  {
    name: "rock",
  },
  {
    name: "indie rock",
  },
  {
    name: "jazz",
  },
  {
    name: "electronic",
  },
  {
    name: "punk",
  },
  {
    name: "indie pop",
  },
  {
    name: "synthwave",
  },
  {
    name: "ambient",
  },
  {
    name: "alternative rock",
  },
  {
    name: "chill",
  },
];
