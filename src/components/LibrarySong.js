const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    audioRef.current.play();
    setSongs(
      songs.map((targetSong) => {
        return {
          ...targetSong,
          active: targetSong.id === song.id,
        };
      })
    );
  };
  if (isPlaying) audioRef.current.play();
  return (
    <div
      onClick={songSelectHandler}
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
