import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

import Car from "@/db/models/Car";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const addCar = async (addCarForm: FormData) => {
    "use server";
    const model = addCarForm.get("model");
    const description = addCarForm.get("desc");
    const picture = addCarForm.get("picture");
    const seats = addCarForm.get("seats");
    const doors = addCarForm.get("doors");
    const largebags = addCarForm.get("largebags");
    const smallbags = addCarForm.get("smallbags");
    const automatic = true;
    const dayRate = addCarForm.get("dayRate");

    try {
      await dbConnect();
      const car = await Car.create({
        model,
        description,
        picture,
        seats,
        doors,
        largebags,
        smallbags,
        automatic,
        dayRate,
      });
      console.log(car);
    } catch (err) {
      console.log(err);
    }
    revalidateTag("cars");
    redirect("/car");
  };

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  let createAt = new Date(profile.data.createAt);
  const pdata = profile.data;

  return (
    <main className="bg-slate-100 m-5 p-5">
      <div className="text-[40px] font-bold">Your Dashboard</div>
      <div className="text-2xl">{pdata.name}</div>
      <table className="table-auto border-separate border-spacing-2">
        <tbody>
          <tr>
            <td>Email</td>
            <td>{pdata.email}</td>
          </tr>
          <tr>
            <td>Tel</td>
            <td>{pdata.tel}</td>
          </tr>
          <tr>
            <td>Member Since</td>
            <td>{createAt.toString()}</td>
          </tr>
        </tbody>
      </table>
      {pdata.role == "admin" ? (
        <form action={addCar}>
          <div className="text-xl text-blue-700">Create Car Model</div>
          <div className="flex items-center w-1/2 my-2">
            <label htmlFor="model" className="w-auto block text-grey-700 pr-4">
              Model
            </label>
            <input
              type="text"
              required
              id="model"
              name="model"
              placeholder="Car Model"
              className="bg-white border-2 border-gray-200 rounded w-full p-2 text-grey-700 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex items-center w-1/2 my-2">
            <label htmlFor="desc" className="w-auto block text-grey-700 pr-4">
              Description
            </label>
            <input
              type="text"
              required
              id="desc"
              name="desc"
              placeholder="Car Description"
              className="bg-white border-2 border-gray-200 rounded w-full p-2 text-grey-700 focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="flex items-center w-1/2 my-2">
            <label
              htmlFor="picture"
              className="w-auto block text-grey-700 pr-4"
            >
              Picture
            </label>
            <input
              type="text"
              required
              id="picture"
              name="picture"
              placeholder="URL"
              className="bg-white border-2 border-gray-200 rounded w-full p-2 text-grey-700 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex items-center w-1/2 my-2">
            <label htmlFor="seats" className="w-auto block text-grey-700 pr-4">
              Seat
            </label>
            <input
              type="number"
              required
              id="seats"
              name="seats"
              placeholder="4"
              min={0}
              max={50}
              className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-grey-700 focus:outline-none focus:border-blue-400"
            />
            <label
              htmlFor="doors"
              className="w-auto block text-grey-700 pr-4 ml-5"
            >
              Doors
            </label>
            <input
              type="number"
              required
              id="doors"
              name="doors"
              placeholder="4"
              min={0}
              max={8}
              className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-grey-700 focus:outline-none focus:border-blue-400"
            />
            <input
              type="checkbox"
              className="ml-5 mr-2"
              id="automatic"
              name="automatic"
            />
            <span>Auto</span>
          </div>
          <div className="flex items-center w-1/2 my-2">
            <label
              htmlFor="largebags"
              className="w-auto block text-grey-700 pr-4"
            >
              Large Bags
            </label>
            <input
              type="number"
              required
              id="largebags"
              name="largebags"
              placeholder="2"
              min={0}
              max={10}
              className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-grey-700 focus:outline-none focus:border-blue-400"
            />
            <label
              htmlFor="smallbags"
              className="w-auto block text-grey-700 pr-4 ml-5"
            >
              Small Bags
            </label>
            <input
              type="number"
              required
              id="smallbags"
              name="smallbags"
              placeholder="2"
              min={0}
              max={10}
              className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-grey-700 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex items-center w-1/2 my-2">
            <label
              htmlFor="dayRate"
              className="w-auto block text-grey-700 pr-4"
            >
              Rate
            </label>
            <input
              type="text"
              required
              id="dayRate"
              name="dayRate"
              placeholder="Daily Rate (including Insurance)"
              className="bg-white border-2 border-gray-200 rounded w-full p-2 text-grey-700 focus:outline-none focus:border-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
          >
            Add New Car
          </button>
        </form>
      ) : null}
    </main>
  );
}
