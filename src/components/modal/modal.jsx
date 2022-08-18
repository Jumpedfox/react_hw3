import React from 'react';

const Modal = ({ modalSrc, closeModal }) => {
  return (
    <div className="overlay" onClick={closeModal}>
      <div className="overlay-modal">
        <img src={modalSrc} alt="big img" />
      </div>
    </div>
  );
};

export default Modal;
