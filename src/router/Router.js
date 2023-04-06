import React from "react";
import { Route, Routes } from "react-router-dom";
import Calendar from "../pages/Calendar";
import MonthlyList from "../pages/MonthlyList";
import Diary from "../pages/Diary";
import NewDiary from "../pages/NewDiary";
import Edit from "../pages/Edit";
import NotFound from "../pages/NotFound";

function Router() {
  return (
    <Routes>
      <Route index element={<Calendar />} />
      <Route path="/list" element={<MonthlyList />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="/new" element={<NewDiary />} />
      <Route path="/new/:date" element={<NewDiary />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
