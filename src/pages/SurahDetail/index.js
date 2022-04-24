import React from "react";
import { Link, useParams } from "react-router-dom";
import { AyatList } from "../../components";

const SurahDetail = () => {
  let params = useParams();

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-secondary btn-sm mb-4">
        <i className="fas fa-arrow-left fa-fw"></i>
        Kembali
      </Link>
      <AyatList id={params.id} />
    </div>
  );
};

export default SurahDetail;
