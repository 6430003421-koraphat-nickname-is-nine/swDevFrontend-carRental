import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import { wrap } from "module";

export default function Home() {
  return (
    <main>
      <Banner />
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        <ProductCard
          carName="Honda Civic"
          imgSrc="/img/civic.jpg"
        ></ProductCard>
        <ProductCard
          carName="Honda Accord"
          imgSrc="/img/accord.jpg"
        ></ProductCard>
        <ProductCard
          carName="Toyota Fortuner"
          imgSrc="/img/fortuner.jpg"
        ></ProductCard>
        <ProductCard
          carName="Tesla Model3"
          imgSrc="/img/tesla.jpg"
        ></ProductCard>
      </div>
    </main>
  );
}
