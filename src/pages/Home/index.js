import React from "react";
import { BottomNav, Search, SurahList } from "../../components";

const Home = () => {
  return (
    <div className="container mt-5">
      <Search />
      <SurahList />
      <BottomNav />
    </div>
  );
};

export default Home;
