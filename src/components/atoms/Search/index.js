import React from "react";
const Search = () => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Cari Surah" />
      <button className="btn btn-success" id="basic-addon1">
        <i className="fas fa-search fa-fw"></i>
      </button>
    </div>
  );
};

export default Search;
