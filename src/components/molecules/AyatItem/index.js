import React from "react";
import { ConvertToArabicNumber } from "../../../utils";

const AyatItem = ({ item }) => {
  return (
    <li className="list-group-item text-end">
      <div>
        <span className="ms-4">{ConvertToArabicNumber(item.nomor)}.</span>
        <span>{item.ar}</span>
      </div>
      <small
        dangerouslySetInnerHTML={{
          __html: `<strong>Artinya</strong> : <i>${item.id}</i>`,
        }}
      />
    </li>
  );
};
export default AyatItem;
