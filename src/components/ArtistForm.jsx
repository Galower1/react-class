export default function ArtistForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const artist = event.target.artist.value;
    const song = event.target.song.value;
    window.localStorage.setItem("group", JSON.stringify({ artist, song }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="artist" placeholder="artist name" />
      <input type="text" name="song" placeholder="song name" />
      <button type="submit">submit</button>
    </form>
  );
}
