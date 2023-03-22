import React from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
  singleCol?: boolean;
};

export default function CardGroup({ title, singleCol, children }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {title !== undefined ? (
        <h3 className="text-fg text-headerSm">{title}</h3>
      ) : undefined}

      {/* TODO: find a better way to implement singleCol */}
      {singleCol !== undefined ? (
        <div className="flex flex-wrap gap-4 md:grid md:grid-cols-1">
          {children}
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2">
          {children}
        </div>
      )}
    </div>
  );
}
