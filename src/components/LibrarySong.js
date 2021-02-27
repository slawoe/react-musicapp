const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
  };
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  return (
    <div onClick={songSelectHandler} className="library-song-container">
      <img src={song.cover} alt={`Song cover of ${song.name}`} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <span>{song.artist}</span>
      </div>
    </div>
  );
};

export default LibrarySong;
