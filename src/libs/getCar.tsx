import getCars from "./getCars";
import CarCatalog from "@/components/CarCatalog";

export default async function getCar(id: string) {
  const response = await fetch(`http://localhost:5000/api/v1/cars/${id}`);
  if (!response) {
    throw new Error("Failed to fetch car id :" + id);
  }
  return await response.json();
}
