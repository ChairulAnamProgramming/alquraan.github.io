import axios from "axios";
import React, { useEffect, useState } from "react";
import { BottomNav } from "../../components";

const JadwalSholat = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("kandangan");
  const [dataJadwal, setDataJadwal] = useState([]);
  useEffect(() => {
    getCities();
    getJadwalSholat();
  }, [city]);

  const getCities = async () => {
    axios
      .get(
        `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json`
      )
      .then((res) => setCities(res.data));
  };

  const changeCity = (res) => {
    setCity(res.target.value);
  };

  const getJadwalSholat = async () => {
    axios
      .get(
        `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${city}/2022/04.json`
      )
      .then((res) => setDataJadwal(res.data));
  };

  return (
    <div>
      <div className="container mt-5">
        <select
          className="form-control form-control-lg"
          onChange={changeCity}
          value={city}
        >
          <option>Pilih</option>
          {cities.map((item, index) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="container mt-3">
        <div className="text-center mb-3">
          <h1 className="text-uppercase">Kota {city}</h1>
        </div>
        <ul className="list-group">
          {dataJadwal.map((item, index) => (
            <li href="#" className="list-group-item list-group-item-action">
              <h5>{item.tanggal}</h5>
              <span className="mb-1 d-block">Imsyak :{item.imsyak}</span>
              <span className="mb-1 d-block">Shubuh :{item.shubuh}</span>
              <span className="mb-1 d-block">Terbit :{item.terbit}</span>
              <span className="mb-1 d-block">Dhuha :{item.dhuha}</span>
              <span className="mb-1 d-block">Dzuhur :{item.dzuhur}</span>
              <span className="mb-1 d-block">Ashar :{item.ashr}</span>
              <span className="mb-1 d-block">Isya :{item.isya}</span>
            </li>
          ))}
        </ul>
      </div>
      <BottomNav isActive="jadwal" />
    </div>
  );
};

export default JadwalSholat;
