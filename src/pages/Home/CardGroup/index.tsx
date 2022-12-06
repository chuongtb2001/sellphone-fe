import React from "react";
import "./CardGroup.css";
import { MdLocalShipping, MdSupportAgent } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";
import { FaHotjar } from "react-icons/fa";

export default function CardGroup() {
  return (
    <>
      <div className="card-group">
        <div className="card-item free-shipping">
          <div className="card-item-container">
            <MdLocalShipping />
            <p>
              <b>Free shipping</b>
            </p>
            <p>Free shipping for all order</p>
          </div>
        </div>
        <div className="card-item member-discount">
          <div className="card-item-container">
            <TbDiscount />
            <p>
              <b>Member discount</b>
            </p>
            <p>On every order up to $20</p>
          </div>
        </div>
        <div className="card-item hot-deal">
          <div className="card-item-container">
            <FaHotjar />
            <p>
              <b>Hot deal</b>
            </p>
            <p>Update every hours</p>
          </div>
        </div>
        <div className="card-item online-support">
          <div className="card-item-container">
            <MdSupportAgent />
            <p>
              <b>Online support </b>
            </p>
            <p>Support 24 hours a day</p>
          </div>
        </div>
        <div className="card-item free-shipping">
          <div className="card-item-container">
            <MdLocalShipping />
            <p>
              <b>Free shipping</b>
            </p>
            <p>Free shipping for all order</p>
          </div>
        </div>
      </div>
    </>
  );
}
