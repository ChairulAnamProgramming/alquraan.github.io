import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, SurahDetail } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/surahdetail/:id" element={<SurahDetail />} />
    </Routes>
  );
};
export default Router;
