"use client";

import LocationDateReserve from "@/components/LacationDateReserve";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/features/cartSlice";
import { ReservationItem } from "../../../interfaces";

import Link from "next/link";

export default function Reservations() {
  const urlParams = useSearchParams();
  const cid = urlParams.get("id");
  const model = urlParams.get("model");

  const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
  const [pickupLocation, setPickupLocation] = useState<string>("BKK");

  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [returnLocation, setReturnLocation] = useState<string>("BKK");

  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = () => {
    if (cid && model && pickupDate && returnDate) {
      const item: ReservationItem = {
        carId: cid,
        carModel: model,
        numOfDays: returnDate.diff(pickupDate, "day"),
        pickupDate: dayjs(pickupDate).format("YYYY/MM/DD"),
        pickupLocation: pickupLocation,
        returnDate: dayjs(returnDate).format("YYYY/MM/DD"),
        returnLocation: returnLocation,
      };
      dispatch(addReservation(item));
    }
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium ">New Reservation</div>
      <div className="w-fit space-y-2">
        <div className="text-grey-600 text-md text-left">
          Pick-Up Date and Location
        </div>
        <LocationDateReserve
          onDateChange={(value: Dayjs) => {
            setPickupDate(value);
          }}
          onLocationChange={(value: string) => {
            setPickupLocation(value);
          }}
        />
      </div>

      <div className="w-fit space-y-2">
        <div className="text-grey-600 text-md text-left">
          Return Date and Location
        </div>
        <LocationDateReserve
          onDateChange={(value: Dayjs) => {
            setReturnDate(value);
          }}
          onLocationChange={(value: string) => {
            setReturnLocation(value);
          }}
        />
      </div>

      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
        onClick={makeReservation}
      >
        Reserve this Car
      </button>

      <Link href="reservations/manage">
        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
          Go to manage reservation
        </button>
      </Link>
    </main>
  );
}
