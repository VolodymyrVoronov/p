import React from "react";
import ReactPlayer from "react-player/youtube";

import "./Player.scss";

const links = {
  1: "https://youtu.be/l9_-2oG4Cc0",
  2: "https://youtu.be/oy9KpeZAypY",
  3: "https://youtu.be/12QixJ9qxHk",
  4: "https://youtu.be/TMUZ9iKFib4",
  5: "https://youtu.be/k5M0V9l3yks",
  6: "https://youtu.be/B8wt7p9LHOw",
  7: "https://youtu.be/ADCL5sTjTLI",
  8: "https://youtu.be/MaP6nE7iPQg",
  9: "https://youtu.be/YYIBtojKDSc",
  10: "https://youtu.be/wmm2ZLf_sfg",
};

const activeLink = Math.floor(Math.random() * 10) + 1;

const Player = ({ isPlaying, setIsPlaying, setActiveIndex }) => {
  return (
    <div className="player">
      <ReactPlayer
        url={`${links[activeLink]}`}
        playing={isPlaying}
        onEnded={() => {
          setActiveIndex(0);
          setIsPlaying(false);
        }}
        onError={() => {
          setActiveIndex(0);
          setIsPlaying(false);
        }}
      />
    </div>
  );
};

export default Player;
