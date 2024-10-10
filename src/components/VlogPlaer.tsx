"use client";

import { useRef, useEffect, useState } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function VlogPlayer({
  vdoSrc,
  isPlaying,
}: {
  vdoSrc: string;
  isPlaying: boolean;
}) {
  const vdoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // alert("wigth is " + vdoRef.current?.videoWidth);
    if (isPlaying) {
      // alert("Play VDO");
      vdoRef.current?.play();
    } else {
      // alert("Pause VDO");
      vdoRef.current?.pause();
    }
  }, [isPlaying]);
  //   const [winwidth, setWinWidth] = useState(0);
  //   const handleWinWidthChange = () => {
  //     setWinWidth(window.innerWidth);
  //     alert("window width " + window.innerWidth);
  //   };
  useWindowListener("resize", (e) =>
    alert("window width is " + (e.target as Window).innerWidth)
  );

  return (
    <video className="w-[40%]" src={vdoSrc} ref={vdoRef} muted loop controls />
  );
}
