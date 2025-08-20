import React from "react";
import { useNavigate } from "react-router-dom";

export default function IconInput() {
  const navigate = useNavigate();



  function click() {
    navigate("/likes")
  }

  return (
    <div className="iconimput">
      <div className="icon">
        <i className="fa fa-globe" aria-hidden="true"></i>
        <i className="fa fa-user" aria-hidden="true"></i>
        <i className="fa fa-solid fa-basket-shopping" onClick={click}></i>
      </div>
      <div className="input">
        <input type="text" placeholder="Search" className="text" />
      </div>
    </div>
  );
}