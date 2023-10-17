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
            {/* In the code, the replace function is used to modify the song.title
            string for creating a URL. It first converts the title to lowercase
            and then replaces spaces with hyphens. This ensures that the URL is
            user-friendly and doesn't have spaces or uppercase letters, making
            it easier to work with and read. */}
            <Link to={`/song/${song.title.toLowerCase().replace(/ /g, "-")}`}>
              {song.title} - {song.artist}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
