"use client";

import React, { SyntheticEvent } from "react";

export default function InteractiveCard({
  children,
  contentname,
}: {
  children: React.ReactNode;
  contentname: string;
}) {
  function onCardSelected() {
    alert("You select " + contentname + ".");
  }

  function onCardMouseAction(event: SyntheticEvent) {
    if (event.type == "mouseover") {
      event.currentTarget.classList.remove("shadow-lg");
      event.currentTarget.classList.add("shadow-2xl");
    } else {
      event.currentTarget.classList.remove("shadow-2xl");
      event.currentTarget.classList.add("shadow-lg");
    }
  }
  return (
    <div
      className="w-1/5 h-[300px] rounded-lg shadow-lg"
      onClick={() => onCardSelected()}
      onMouseOver={(e) => onCardMouseAction(e)}
      onMouseOut={(e) => onCardMouseAction(e)}
    >
      {children}
    </div>
  );
}
