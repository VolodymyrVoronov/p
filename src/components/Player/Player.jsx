import React from "react";
import ReactPlayer from "react-player/youtube";

import "./Player.scss";

const Player = ({ isPlaying, setActiveIndex }) => {
  return (
    <div className="player">
      <ReactPlayer
        url="https://youtu.be/l9_-2oG4Cc0"
        playing={isPlaying}
        onEnded={() => setActiveIndex(0)}
        onError={() => setActiveIndex(0)}
      />
    </div>
  );
};

export default Player;
