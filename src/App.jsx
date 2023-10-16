import { BrowserRouter, Link, Routes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
            <li className="app-li">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="app-li">
              <Link to="/my-info">My Info</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
