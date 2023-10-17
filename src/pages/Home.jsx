import { SongList } from "../components/songs/SongList";
export const Home = () => {
  // Logic Here
  let title = "Rolling Stones 500 Greatest Songs of all Time";
  return (
    <>
      <SongList componentTitle={title} />
    </>
  );
};
