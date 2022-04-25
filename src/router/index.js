import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, JadwalSholat, SurahDetail } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/surahdetail/:id" element={<SurahDetail />} />
      <Route path="/jadwal-sholat" element={<JadwalSholat />} />
    </Routes>
  );
};
export default Router;
