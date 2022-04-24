import axios from "axios";
import React, { useEffect, useState } from "react";
import SurahItem from "../../molecules/SurahItem";

const SurahList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getListSurah();
  }, []);

  const getListSurah = () => {
    axios.get(`https://api-alquranid.herokuapp.com/surah`).then((res) => {
      setData(res.data.data);
    });
  };

  return (
    <div className="list-group">
      {data.length ? (
        data.map((item, index) => <SurahItem data={item} key={index} />)
      ) : (
        <div className="text-center mt-5">
          <div class="spinner-grow text-primary mt-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurahList;
