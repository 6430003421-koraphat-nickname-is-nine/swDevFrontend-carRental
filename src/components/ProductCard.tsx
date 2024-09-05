// "use client";

// import styles from "./productcard.module.css";
import InteractiveCard from "./InteractiveCard";
import Image from "next/image";
// import { Button } from "@mui/material";

export default function ProductCard({
  carName,
  imgSrc,
  onCompare,
}: {
  carName: string;
  imgSrc: string;
  onCompare: Function;
}) {
  function onCarSelected() {
    alert("You select " + carName + ".");
  }
  return (
    <InteractiveCard contentname={carName}>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          className="object-cover rounded-t-lg"
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="w-full h-[15%] p-[10px]">
        <p>{carName}</p>
      </div>
      <button
        className="block text-sm h-[10%] rounded-md bg-sky-600 hover:bg-indigo-600 mx-2 px-1 py-1 text-white shadow-sm"
        onClick={(e) => {
          e.stopPropagation();
          onCompare(carName);
        }}
      >
        Compare
      </button>
    </InteractiveCard>
  );
}
