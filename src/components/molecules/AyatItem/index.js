import React from "react";
import { ConvertToArabicNumber } from "../../../utils";
import "./AyatItem.css";
const AyatItem = ({ item }) => {
  return (
    <li className="list-group-item d-flex justify-content-end">
      <div className="text-end">
        <span>{item.ar}</span>
        <small
          className="d-block"
          dangerouslySetInnerHTML={{
            __html: `<strong>Artinya</strong> : <i>${item.id}</i>`,
          }}
        />
      </div>
      <span className="nomor ms-2">.{ConvertToArabicNumber(item.nomor)}</span>
    </li>
  );
};
export default AyatItem;
