import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css"

export const Navigation = () => {
  return (
    <nav className={styles.container}>
      <NavLink to="/" >
        <button className={styles.butHome} type="button">To home</button>
      </NavLink>
      <NavLink to="/tweets">
        <button className={styles.butHome} type="button" >To tweets</button>
      </NavLink>
    </nav>
  );
};
