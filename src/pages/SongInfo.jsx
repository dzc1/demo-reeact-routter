import { useParams } from "react-router-dom";
import songsData from "../data/songs.json";

export const SongInfo = ({ title, artist, album, year }) => {
  const { songTitle } = useParams();
  const song = songsData.songs.find(
    (s) => s.title.toLowerCase().replace(/ /g, "-") === songTitle
  );

  if (!song) return <p>Song not found!</p>;

  return (
    <>
      <div>
        <h2>Song Information</h2>
        <h3>Title:</h3>
        <p>{song.title}</p>
        <h3>Artist:</h3>
        <p>{song.artist}</p>
        <h3>Album:</h3>
        <p>{song.album}</p>
        <h3>Year:</h3>
        <p>{song.year}</p>
      </div>
    </>
  );
};
