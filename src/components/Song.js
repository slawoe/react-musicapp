const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="SongCover" />
      <h2>{currentSong.name}</h2>
      <span>{currentSong.artist}</span>
    </div>
  );
};

export default Song;
