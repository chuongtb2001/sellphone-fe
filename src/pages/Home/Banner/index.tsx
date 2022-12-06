import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="big-banner">
          <img src="https://i.ibb.co/Db46G1t/big-img.png" alt="" />
        </div>
        <div className="small-banner">
          <div>
            <img src="https://i.ibb.co/2ZZ0Wsz/small-img-1.png" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/smSCyD8/small-img-2.png" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/gFF3m2v/small-img-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
