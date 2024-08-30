import LocationDateReserve from "@/components/LacationDateReserve";

export default function Reservations() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium ">New Reservation</div>
      <div className="w-fit space-y-2">
        <div className="text-grey-600 text-md text-left">
          Pick-Up Date and Location
        </div>
        <LocationDateReserve />
      </div>

      <div className="w-fit space-y-2">
        <div className="text-grey-600 text-md text-left">
          Return Date and Location
        </div>
        <LocationDateReserve />
      </div>

      <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
        Check Car Avaibility
      </button>
    </main>
  );
}
