import React from "react";
import NavLink from "next/link";
import styles from "./Header.module.css";

const links = [
  { name: "Home", link: "/" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Courses & Edu", link: "/courses" },
];

// TODO: add state management to highligh currently active nav page
export default function Header() {
  return (
    <div className={styles["header-width"]}>
      {links.map((link) => (
        <NavLink
          href={link.link}
          key={link.name}
          className="text-itemNav hover:text-fg"
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
