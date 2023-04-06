import { createSlice } from "@reduxjs/toolkit";

const setDaily = (date) => {
  const tmp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  const lastDay = new Date(tmp).getDate();
  let days = [];
  for (let i = 1; i <= lastDay; i++) {
    days.push(new Date(date.getFullYear(), date.getMonth(), i));
  }

  return days;
};

const initialState = {
  date: new Date(),
  daily: setDaily(new Date()),
};

const dateReducer = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDatePoint: (state, action) => ({
      date: action.payload.date,
      daily: setDaily(action.payload.date),
    }),
    backToCurMonth: () => ({
      date: new Date(),
      daily: setDaily(new Date()),
    }),
    increaseDate: (state) => {
      const newDate = new Date(
        state.date.getFullYear(),
        state.date.getMonth() + 1
      );
      return {
        date: newDate,
        daily: setDaily(newDate),
      };
    },
    decreaseDate: (state) => {
      const newDate = new Date(
        state.date.getFullYear(),
        state.date.getMonth() - 1
      );
      return {
        date: newDate,
        daily: setDaily(newDate),
      };
    },
  },
});

export const { setDatePoint, backToCurMonth, increaseDate, decreaseDate } =
  dateReducer.actions;
export default dateReducer.reducer;
