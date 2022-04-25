import React from "react";
const Search = () => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control form-control-lg border-0 bg-gray"
        placeholder="Cari Surah"
      />
      <button className="btn btn-green btn-lg" id="basic-addon1">
        <i className="fas fa-search fa-fw"></i>
      </button>
    </div>
  );
};

export default Search;
