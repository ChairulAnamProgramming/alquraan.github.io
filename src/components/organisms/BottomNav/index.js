import React from "react";
import Menu from "./Menu";

const BottomNav = ({ isActive }) => {
  return (
    <nav className="nav fixed-bottom justify-content-center bg-dark">
      <Menu
        href="/"
        title="AL-QUR'AN"
        isActive={isActive == "quran" ? true : false}
        icon={<i class="fa-solid fa-book-quran fa-fw"></i>}
      />
      <Menu
        href="/jadwal-sholat"
        title="JADWAL SHOLAT"
        isActive={isActive == "jadwal" ? true : false}
        icon={<i class="fa-solid fa-clock fa-fw"></i>}
      />
    </nav>
  );
};

export default BottomNav;
