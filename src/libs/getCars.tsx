export default async function getCars() {
  //add timeout for loading delay testing
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch("http://localhost:5000/api/v1/cars");
  if (!response) {
    throw new Error("Failed to fetch cars");
  }
  return await response.json();
}
