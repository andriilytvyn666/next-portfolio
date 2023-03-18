import React from "react";

const names = ["Home", "Skills", "Projects", "Courses & Edu"];

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  return (
    <div
      className={className + " " + "flex h-16 gap-5 justify-end items-center"}
    >
      {names.map((name) => (
        <span key="name" className="text-itemNav hover:text-fg">
          {name}
        </span>
      ))}
    </div>
  );
}
