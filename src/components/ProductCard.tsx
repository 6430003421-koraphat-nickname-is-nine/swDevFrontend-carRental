"use client";

import styles from "./productcard.module.css";
import Image from "next/image";

export default function ProductCard({
  carName,
  imgSrc,
}: {
  carName: string;
  imgSrc: string;
}) {
  return (
    <div className="w-1/5 h-[300px] rounded-lg">
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          className="object-cover rounded-t-lg"
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="w-full h-[70% p-[10px]">
        <p>{carName}</p>
      </div>
    </div>
  );
}
