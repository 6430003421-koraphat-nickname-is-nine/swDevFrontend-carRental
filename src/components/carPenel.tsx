"use client";

import ProductCard from "./ProductCard";
import { useReducer, useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRef, useEffect } from "react";
import getCars from "@/libs/getCars";

export default function CarPanel() {
  const [carResponse, setCarResponse] = useState(null);

  useEffect(() => {
    const fetchaData = async () => {
      const cars = await getCars();
      setCarResponse(cars);
    };
    fetchaData();
  }, []);

  const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  //  Reducer Function
  const compareReducer = (
    compareList: Set<string>,
    action: { type: string; carName: string }
  ) => {
    switch (action.type) {
      case "add": {
        return new Set(compareList.add(action.carName));
      }
      case "remove": {
        compareList.delete(action.carName);
        return new Set(compareList);
      }
      default: {
        return compareList;
      }
    }
  };
  const [compareList, dispatchCompare] = useReducer(
    compareReducer,
    new Set<string>()
  );

  /* Mock Data */
  // const mockCarRepo = [
  //   { cid: "001", name: "Honda Civic", image: "/img/civic.jpg" },
  //   { cid: "002", name: "Honda Accord", image: "/img/accord.jpg" },
  //   { cid: "003", name: "Toyota Fortuner", image: "/img/fortuner.jpg" },
  //   { cid: "004", name: "Tesla Model3", image: "/img/tesla.jpg" },
  // ];

  if (!carResponse) return <p>Car Panel is Loading ...</p>;

  let carResponseData = carResponse.data;

  return (
    <div className="m-[20px] flex flex-row justify-around content-around p-[10px] flex-wrap">
      {carResponseData.map((carItem: any) => (
        <Link href={`/car/${carItem.id}`} className="w-1/5" key={carItem.id}>
          <ProductCard
            carName={carItem.model}
            imgSrc={carItem.picture}
            onCompare={(car: string) =>
              dispatchCompare({ type: "add", carName: car })
            }
          />
        </Link>
      ))}
      {/* <div>order = {order}</div>
      <Button variant="contained" onClick={() => dispatchOrder(15)}>
        Click To add 15 to order
      </Button> */}
      <div className="w-full text-xl font-medium mt-[16px]">
        Compare List: {compareList.size}
      </div>
      {Array.from(compareList).map((car) => (
        <div
          key={car}
          className="block w-[100%]"
          onClick={() => dispatchCompare({ type: "remove", carName: car })}
        >
          {car}
        </div>
      ))}
      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
        onClick={() => {
          countRef.current = countRef.current + 1;
          alert(countRef.current);
        }}
      >
        Count with Ref obj
      </button>
      <input
        type="text"
        placeholder="Please Fill"
        className="block text-grey-900 text-sm
      rounded-lg p-2 m-2 bg-purple-50 ring-1 ring-inset ring-purple-400 
      focus:outline-none focus:bg-purple-200 focus:ring-2"
        ref={inputRef}
      />
      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
        onClick={() => {
          if (inputRef.current != null) {
            inputRef.current.focus();
          }
        }}
      >
        Focus Input
      </button>
    </div>
  );
}
