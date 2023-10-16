import Songs from "../../data/songs.json";
import { Link } from "react-router-dom";
export const SongList = ({ componentTitle }) => {
  // Logic Here
  let songs = Songs.songs;

  return (
    <>
      <h1>{componentTitle}</h1>
      <ul className="songCard">
        {songs.map((song) => (
          <li key={song.rank}>
            <Link to={`/song/${song.title.toLowerCase().replace(/ /g, "-")}`}>
              {song.title} - {song.artist}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
