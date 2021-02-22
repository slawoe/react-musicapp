const LibrarySong = ({ song }) => {
  return (
    <div className="library-song-container">
      <img src={song.cover} alt={`Song cover of ${song.name}`} />
      <h2>{song.name}</h2>
      <span>{song.artist}</span>
    </div>
  );
};

export default LibrarySong;
