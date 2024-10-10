import ProductCard from "./ProductCard";
import Link from "next/link";

// export default function CarCatalog({ carJson }: { carJson: Object }) {
export default async function CarCatalog({ carJson }: { carJson: any }) {
  const carJsonReady = await carJson;
  return (
    <div>
      Explore {carJsonReady.count} models in our catalog
      <div className="m-[20px] flex flex-row content-around justify-around flex-wrap p-[10px]">
        {carJsonReady.data.map(
          //   (carItem: { id: string; model: string; picture: string }) => (
          (carItem: any) => (
            <Link key={carItem.id} href={`car/${carItem.id}`} className="w-1/5">
              <ProductCard carName={carItem.model} imgSrc={carItem.picture} />
            </Link>
          )
        )}
      </div>
    </div>
  );
}