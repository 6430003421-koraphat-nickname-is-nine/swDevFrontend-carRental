import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import CarPanel from "@/components/carPenel";
import ProductCard from "@/components/ProductCard";
import { wrap } from "module";

export default function Home() {
  return (
    <main>
      <Banner />
      <CarPanel />
    </main>
  );
}
