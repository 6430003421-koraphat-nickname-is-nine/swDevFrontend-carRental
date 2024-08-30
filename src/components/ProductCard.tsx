// "use client";

// import styles from "./productcard.module.css";
import InteractiveCard from "./InteractiveCard";
import Image from "next/image";

export default function ProductCard({
  carName,
  imgSrc,
}: {
  carName: string;
  imgSrc: string;
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
      <div className="w-full h-[70%] p-[10px]">
        <p>{carName}</p>
      </div>
    </InteractiveCard>
  );
}
