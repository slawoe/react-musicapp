const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <span>Start Time</span>
        <input type="range"></input>
        <span>End Time</span>
      </div>
      <div className="play-control"></div>
    </div>
  );
};

export default Player;
