import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function CourseGroup({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-fg text-headerSm">{title}</h3>
      <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2">
        {children}
      </div>
    </div>
  );
}
