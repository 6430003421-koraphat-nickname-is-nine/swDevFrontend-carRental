import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type CarState = {
  carItems: ReservationItem[];
};

const initialState: CarState = { carItems: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<ReservationItem>) => {
      state.carItems.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<ReservationItem>) => {
      const actP = action.payload;
      const remainItems = state.carItems.filter((obj) => {
        return (
          obj.carModel !== actP.carModel ||
          obj.pickupDate !== actP.pickupDate ||
          obj.returnDate !== actP.returnDate
        );
      });
      state.carItems = remainItems;
    },
  },
});

export const { addReservation, removeReservation } = cartSlice.actions;
export default cartSlice.reducer;
