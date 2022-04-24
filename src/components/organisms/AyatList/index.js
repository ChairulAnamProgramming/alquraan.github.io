import axios from "axios";
import React, { useEffect, useState } from "react";
import { ConvertToArabicNumber } from "./../../../utils";
import AyatItem from "./../../molecules/AyatItem";

const AyatList = ({ id }) => {
  const [data, setData] = useState([]);
  const [surahID, setsurahID] = useState(id);
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    await axios
      .get(`https://api-alquranid.herokuapp.com/surah/${surahID}`)
      .then((res) => {
        setData(res.data.data);
      });
  };
  return (
    <>
      {data.length ? (
        <ul className="list-group">
          {data.map((item, index) => {
            return <AyatItem key={index} item={item} />;
          })}
        </ul>
      ) : (
        <div className="text-center mt-5">
          <div className="spinner-grow text-primary">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default AyatList;
