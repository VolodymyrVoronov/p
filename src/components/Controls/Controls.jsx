import React from "react";
import { BiPlay, BiPause } from "react-icons/bi";

import "./Controls.scss";

const Controls = ({ setIsPlaying, setActiveIndex, activeIndex }) => {
  const onPlayBtnClick = () => {
    setActiveIndex(1);
    setIsPlaying(true);
  };

  const onPauseBtnClick = () => {
    setActiveIndex(2);
    setIsPlaying(false);
  };

  const playBtnIndex = 1;
  const pauseBtnIndex = 2;

  return (
    <div className="controls">
      <ul className="controls__btns">
        <li
          onClick={() => onPlayBtnClick()}
          className={`controls__btn controls__btn--play ${
            activeIndex === playBtnIndex ? "controls__btn--clicked" : ""
          }`}
        >
          <BiPlay />
        </li>
        <li
          onClick={() => onPauseBtnClick()}
          className={`controls__btn controls__btn--pause ${
            activeIndex === pauseBtnIndex ? "controls__btn--clicked" : ""
          }`}
        >
          <BiPause />
        </li>
      </ul>
    </div>
  );
};

export default Controls;
