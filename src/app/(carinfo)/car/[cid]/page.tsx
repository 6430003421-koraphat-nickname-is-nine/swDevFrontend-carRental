import Image from "next/image";
import getCar from "@/libs/getCar";

export default async function CarDetailPage({
  params,
}: {
  params: { cid: string };
}) {
  /* Mock DATA */
  const carDetail = await getCar(params.cid);
  const carDetailData = await carDetail.data;

  // const mockCarRepo = new Map();
  // mockCarRepo.set("001", { name: "Honda Civic", image: "/img/civic.jpg" });
  // mockCarRepo.set("002", { name: "Honda Accord", image: "/img/accord.jpg" });
  // mockCarRepo.set("003", {
  //   name: "Toyota Fortuner",
  //   image: "/img/fortuner.jpg",
  // });
  // mockCarRepo.set("004", { name: "Tesla Model3", image: "/img/tesla.jpg" });

  return (
    <main className="text-center p-5">
      <h1 className="text-lg font-medium"> Car ID: {carDetailData.model}</h1>
      <div className="flex flex-row my-5">
        <Image
          src={carDetailData.picture}
          alt={carDetailData.model}
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%] bg-black"
        />
        <div className="text-md mx-5">
          <div className="text-[24px]">{carDetailData.description}</div>
          <div className="text-left">
            <div>Doors: {carDetailData.doors}</div>
            <div>Seats: {carDetailData.seats}</div>
            <div>Large Bags: {carDetailData.largebags}</div>
            <div>Small Bags: {carDetailData.smallbags}</div>
            <div>
              Daily Rental Rate: {carDetailData.dayRate} (insurance included)
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ cid: "001" }, { cid: "002" }, { cid: "003" }, { cid: "004" }];
}
