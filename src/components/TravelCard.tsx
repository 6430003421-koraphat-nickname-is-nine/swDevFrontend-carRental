"use client";

import VlogPlayer from "./VlogPlaer";
import { useState } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";
import { Rating } from "@mui/material";

export default function TravelCard() {
  const [playing, setPlaying] = useState(true);
  const [rating, setRating] = useState(0);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  useWindowListener("pointermove", (e) => {
    setPointerPosition({
      x: (e as PointerEvent).clientX,
      y: (e as PointerEvent).clientY,
    });
  });

  return (
    <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
      <VlogPlayer
        isPlaying={playing}
        vdoSrc="/video/ThailandNatural.mp4"
      ></VlogPlayer>
      <div className="px-[16px] m-5">
        Thailand Natural ({pointerPosition.x},{pointerPosition.y} )
        <button
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
        <Rating
          className="w-full h-[10%]"
          value={rating == undefined ? 0 : rating}
          onChange={(e, newValue) => {
            if (newValue != null) {
              setRating(newValue);
            }
          }}
        />
      </div>
    </div>
  );
}
