import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
const SurahItem = ({ data }) => {
  const audio = new Audio(`${data.audio}`);
  const [statusAudio, setStatusAudio] = useState(false);

  const playPause = () => {
    if (!statusAudio) {
      audio.play();
      setStatusAudio(true);
    } else {
      audio.pause();
      setStatusAudio(false);
    }
  };

  return (
    <ul class="list-group">
      <li className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {data.asma} ({data.nama}) - {data.arti}
          </h5>
          <small>{data.type}</small>
        </div>
        <small
          className="d-block mb-5  text-secondary"
          dangerouslySetInnerHTML={{
            __html: `${data.keterangan}`,
          }}
        />
        <ReactAudioPlayer src={data.audio} controls />
        <div className="d-grid mt-4">
          <Link
            to={`/SurahDetail/${data.nomor}`}
            className="btn btn-green rounded py-3"
          >
            <i class="fa-solid fa-book-quran fa-fw"></i>
            Baca Surah
          </Link>
        </div>
      </li>
    </ul>

    // <div className="list-group-item list-group-item-action">
    //   <Link to={`/SurahDetail/${data.nomor}`} className="text-decoration-none">
    //     <a>
    //       <div className="d-flex w-100 justify-content-between  text-dark">
    //         <h5 className="mb-1 ">
    //           {data.asma} ({data.nama}) - {data.arti}
    //         </h5>
    //         <small className="text-uppercase">{data.type}</small>
    //       </div>
    //       <small
    //         className="d-block mb-5  text-secondary"
    //         dangerouslySetInnerHTML={{
    //           __html: `${data.keterangan}`,
    //         }}
    //       />
    //     </a>
    //   </Link>
    //   <ReactAudioPlayer src={data.audio} controls />
    //   <Link
    //     to={`/SurahDetail/${data.nomor}`}
    //     className="btn btn-success py-2 rounded"
    //   >
    //     <i class="fa-solid fa-book-quran fa-fw"></i>
    //     Baca Surah
    //   </Link>
    //   {/* {statusAudio ? (
    //     <button className="btn btn-warning btn-sm" onClick={playPause}>
    //       <i class="fa-solid fa-pause me-2"></i>
    //       Pause
    //     </button>
    //   ) : (
    //     <button className="btn btn-success btn-sm" onClick={playPause}>
    //       <i className="fas fa-play fa-fw me-2"></i>
    //       Play
    //     </button>
    //   )} */}
    // </div>
  );
};

export default SurahItem;
