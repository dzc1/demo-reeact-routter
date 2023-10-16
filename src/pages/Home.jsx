import { SongList } from "../components/songs/SongList";
function Home() {
  // Logic Here
  let title = "Rolling Stones 500 Greatest Songs of all Time";
  return (
    <>
      <SongList componentTitle={title} />
    </>
  );
}

export default Home;
