import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
};

export default function Card({ title, subtitle }: Props) {
  return (
    <Link href="https://rihterb.pp.ua" target="_blank" className="w-full">
      <div className="flex gap-4 p-4 rounded-lg hover:bg-bg-active">
        <div className="w-12 h-12 rounded-lg bg-fg"></div>
        <div className="flex flex-col ">
          <h4 className="text-fg">{title}</h4>
          <h5 className="text-fg-secondary">{subtitle}</h5>
        </div>
      </div>
    </Link>
  );
}
