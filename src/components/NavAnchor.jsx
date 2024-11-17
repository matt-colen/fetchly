import { NavLink } from "react-router-dom";
import styles from "./NavAnchor.module.css";

export default function NavAnchor({ linkText, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? `${styles["active-link"]} ${styles["nav-link"]}`
          : styles["nav-link"]
      }
    >
      {linkText}
    </NavLink>
  );
}
