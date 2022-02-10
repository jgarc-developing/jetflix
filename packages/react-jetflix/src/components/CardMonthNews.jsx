import React from "react";
// image
import news from "../assets/img/img-monthnews.png";
export const CardMonthNews = () => {
  return (
    <div className="flex flex-col items-start card-container mt-48">
      <h2 className="text-4xl italic text-white">Novedades del mes</h2>
      <img className="card-section" src={news}></img>
      <button className="btn-play-video">
        <em>Ver video</em> <span>27:15</span>
      </button>
    </div>
  );
};
