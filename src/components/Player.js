import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong }) => {
  const audioRef = useRef(null);
  const playSongHandler = () => {
    audioRef.current.play();
  };
  return (
    <div className="player">
      <div className="time-control">
        <span>Start Time</span>
        <input type="range"></input>
        <span>End Time</span>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio} />
    </div>
  );
};

export default Player;
