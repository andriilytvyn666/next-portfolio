import React from "react";
import NavLink from "next/link";

const links = [
  { name: "Home", link: "/" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Courses & Edu", link: "/courses" },
];

type Props = {
  className?: string;
};
// TODO: add state management to highligh currently active nav page
export default function Header({ className }: Props) {
  return (
    <div
      className={className + " " + "flex h-16 gap-5 justify-end items-center"}
    >
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
