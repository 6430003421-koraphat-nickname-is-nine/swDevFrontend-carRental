"use client";

import ProductCard from "./ProductCard";
import { useReducer } from "react";

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
  return (
    <div className="m-[20px] flex flex-row flex-wrap justify-around content-around">
      <ProductCard
        carName="Honda Civic"
        imgSrc="/img/civic.jpg"
        onCompare={(car: string) =>
          dispatchCompare({ type: "add", carName: car })
        }
      />
      <ProductCard
        carName="Honda Accord"
        imgSrc="/img/accord.jpg"
        onCompare={(car: string) =>
          dispatchCompare({ type: "add", carName: car })
        }
      />
      <ProductCard
        carName="Toyota Fortuner"
        imgSrc="/img/fortuner.jpg"
        onCompare={(car: string) =>
          dispatchCompare({ type: "add", carName: car })
        }
      />
      <ProductCard
        carName="Tesla Model3"
        imgSrc="/img/tesla.jpg"
        onCompare={(car: string) =>
          dispatchCompare({ type: "add", carName: car })
        }
      />
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
