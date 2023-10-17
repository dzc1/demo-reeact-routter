import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { SongInfo } from "../pages/SongInfo";
import { MovieInfo } from "../pages/MovieInfo";
import { MyInfo } from "../pages/MyInfo";
import { NotFound } from "../pages/NotFound";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/my-info" element={<MyInfo />} />
    <Route path="*" element={<NotFound />} />
    {/* Define your dynamic route here below */}
    <Route path="/song/:songTitle" element={<SongInfo />} />
    {/* Define your dynamic route here below */}
    <Route path="/movie/:id" element={<MovieInfo />} />
  </>
);

export default routes;
