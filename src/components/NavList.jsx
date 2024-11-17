import NavAnchor from "./NavAnchor";
import styles from "./NavList.module.css";

export default function NavList({ links }) {
  const listItems = links.map((link, i) => {
    return (
      <li key={i}>
        <NavAnchor linkText={link.txt} path={link.path} />
      </li>
    );
  });

  return <ul className={`${styles["nav-list"]} flex`}>{listItems}</ul>;
}
