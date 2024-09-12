"use client";

import ProductCard from "./ProductCard";
import { useReducer } from "react";
import { Button } from "@mui/material";
import Link from "next/link";

export default function CarPanel() {
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
  // const orderReducer = (order: number, amount: number) => {
  //   let netOrder = order + amount;
  //   return netOrder;
  // };
  // const [order, dispatchOrder] = useReducer(orderReducer, 0);

  /* Mock Data */
  const mockCarRepo = [
    { cid: "001", name: "Honda Civic", image: "/img/civic.jpg" },
    { cid: "002", name: "Honda Accord", image: "/img/accord.jpg" },
    { cid: "003", name: "Toyota Fortuner", image: "/img/fortuner.jpg" },
    { cid: "004", name: "Tesla Model3", image: "/img/tesla.jpg" },
  ];

  return (
    <div className="m-[20px] flex flex-row flex-wrap justify-around content-around p-[10px] flex-wrap">
      {mockCarRepo.map((carItem) => (
        <Link href={`/car/${carItem.cid}`} className="w-1/5">
          <ProductCard
            carName={carItem.name}
            imgSrc={carItem.image}
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
    </div>
  );
}
