import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import CarPanel from "@/components/carPenel";
import ProductCard from "@/components/ProductCard";
import { wrap } from "module";
import TravelCard from "@/components/TravelCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <TravelCard></TravelCard>
    </main>
  );
}
