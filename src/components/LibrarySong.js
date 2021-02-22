const LibrarySong = ({ song }) => {
  return (
    <div className="library-song-container">
      <img src={song.cover} alt={`Song cover of ${song.name}`} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <span>{song.artist}</span>
      </div>
    </div>
  );
};

export default LibrarySong;
