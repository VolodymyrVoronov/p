import React from "react";

import Controls from "./../Controls/Controls";
import Player from "./../Player/Player";

import "./App.scss";

const App = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="container">
      <section className="cassette">
        <div className="cassette__body">
          <ul className="cassette__screws">
            <li className="cassette__screw cassette__screw--top-left"></li>
            <li className="cassette__screw cassette__screw--bottom-left"></li>
            <li className="cassette__screw cassette__screw--top-right"></li>
            <li className="cassette__screw cassette__screw--bottom-right"></li>
          </ul>
          <ul className="cassette__lines">
            <li className="cassette__line cassette__line--top-1 cassette__line--rotate-90"></li>
            <li className="cassette__line cassette__line--top-2 cassette__line--rotate-90"></li>
            <li className="cassette__line cassette__line--top-3 cassette__line--rotate-90"></li>
            <li className="cassette__line cassette__line--top-4 cassette__line--rotate-90"></li>
            <li className="cassette__line cassette__line--left-1 cassette__line--rotate-0"></li>
            <li className="cassette__line cassette__line--left-2 cassette__line--rotate-0"></li>
            <li className="cassette__line cassette__line--left-3 cassette__line--rotate-0"></li>
          </ul>
        </div>
        <div className="cassette__label label">
          <ul className="label__lines">
            <li className="label__line label__line--left-1 label__line--rotate-0"></li>
            <li className="label__line label__line--left-2 label__line--rotate-0"></li>
            <li className="label__line label__line--left-3 label__line--rotate-0"></li>
            <li className="label__line label__line--left-4 label__line--rotate-0"></li>
            <li className="label__line label__line--top-5 label__line--rotate-90"></li>
            <li className="label__line label__line--top-6 label__line--rotate-90"></li>
          </ul>
          <section className="cassette__side">A</section>
          <section className="cassette__siries">HD90</section>
        </div>
        <div className="cassette__tape-box tape-box">
          <ul className="tape-box__lines">
            <li className="tape-box__line tape-box__line--left-1"></li>
            <li className="tape-box__line tape-box__line--left-2"></li>
            <li className="tape-box__line tape-box__line--left-3"></li>
            <li className="tape-box__line tape-box__line--left-4"></li>
          </ul>
        </div>
        <div className="cassette__tape-drums tape-drums">
          <ul className="tape-drums__items">
            <li
              className={`tape-drums__item  tape-drums__item--left drum-left ${
                isPlaying && "tape-drums__item--spin"
              }`}
            >
              <span className="drum-left__pin drum-left__pin--1"></span>
              <span className="drum-left__pin drum-left__pin--2"></span>
              <span className="drum-left__pin drum-left__pin--3"></span>
              <span className="drum-left__pin drum-left__pin--4"></span>
              <span className="drum-left__pin drum-left__pin--5"></span>
              <span className="drum-left__pin drum-left__pin--6"></span>
            </li>
            <li
              className={`tape-drums__item  tape-drums__item--right drum-right ${
                isPlaying && "tape-drums__item--spin"
              }`}
            >
              <span className="drum-right__pin drum-right__pin--1"></span>
              <span className="drum-right__pin drum-right__pin--2"></span>
              <span className="drum-right__pin drum-right__pin--3"></span>
              <span className="drum-right__pin drum-right__pin--4"></span>
              <span className="drum-right__pin drum-right__pin--5"></span>
              <span className="drum-right__pin drum-right__pin--6"></span>
            </li>
          </ul>
        </div>
        <div className="cassette__tape-big-drums tape-big-drums">
          <ul className="tape-big-drums__items">
            <li
              className={`tape-big-drums__item tape-big-drums__item--left big-drum-left ${
                isPlaying && "tape-big-drums__item--spin"
              }`}
            >
              <span className="big-drum-left__line big-drum-left__line--1"></span>
              <span className="big-drum-left__line big-drum-left__line--2"></span>
            </li>
            <li
              className={`tape-big-drums__item tape-big-drums__item--right big-drum-right ${
                isPlaying && "tape-big-drums__item--spin"
              }`}
            >
              <span className="big-drum-right__line big-drum-right__line--1"></span>
            </li>
          </ul>
        </div>
        <div className="cassette__mech mech">
          <span className="mech__item mech__item--1"></span>
          <span className="mech__item mech__item--2"></span>
          <span className="mech__item mech__item--3"></span>
          <span className="mech__item mech__item--4"></span>
          <span className="mech__item mech__item--5"></span>
        </div>
      </section>

      <Controls
        setIsPlaying={setIsPlaying}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      />
      <Player isPlaying={isPlaying} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default App;
