import { Link, useNavigate } from "react-router-dom";

export const NotFoundComp = () => {
  const navigate = useNavigate();
  const clickBackBtn = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>404 page not found...</h2>
      <Link to="/">Home</Link>
      <button onClick={clickBackBtn}>Home two</button>
    </div>
  );
};
