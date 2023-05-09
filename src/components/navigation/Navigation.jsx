import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">
        <button>To home</button>
      </NavLink>
      <NavLink to="/tweets">
        <button>To tweets</button>
      </NavLink>
    </nav>
  );
};
