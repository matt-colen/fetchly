import { NavLink } from "react-router-dom";
import NavList from "./NavList";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={`${styles.nav} flex`} aria-label="Main Navigation">
      <NavLink to="/" className={styles.logo}>
        Fetchly
      </NavLink>
      <NavList
        links={[
          { txt: "Find Pets", path: "/" },
          { txt: "Saved Pets", path: "saved" },
        ]}
      />
    </nav>
  );
}
