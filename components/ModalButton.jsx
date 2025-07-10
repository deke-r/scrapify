"use client";

import { useState } from "react";
import PickupRequestModal from "./PickupRequestModal";
import { MessagesSquare } from 'lucide-react';
const ModalButton = ({ text = "Get a quote", variant = "green" }) => {
  const [showModal, setShowModal] = useState(false);

  
  const buttonClass =
    variant === "white"
      ? "btn bg-white text-success border-success rounded-4 py-3 f_14 fw-semibold px-4"
      : "btn bg-success text-white rounded-4 py-3 f_14 fw-semibold px-4";

  return (
    <>
      <button className={buttonClass} onClick={() => setShowModal(true)} style={{zIndex:2}}>
        {text}<MessagesSquare  className="ms-1"/>
      </button>


      <PickupRequestModal show={showModal} handleClose={() => setShowModal(false)} />

 
    </>
  );
};

export default ModalButton;
