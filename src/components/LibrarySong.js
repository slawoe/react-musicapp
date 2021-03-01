const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    audioRef.current.play();
  };
  const newSongs = songs.map((song) => {
    if (song.id === id) {
      return {
        ...song,
        active: true,
      };
    } else {
      return {
        ...song,
        active: false,
      };
    }
  });

  function updateSongs() {
    setSongs(newSongs);
  }

  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
  return (
    <div
      onClick={(songSelectHandler, updateSongs)}
      className={`library-song-container ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={`Song cover of ${song.name}`} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <span>{song.artist}</span>
      </div>
    </div>
  );
};

export default LibrarySong;
