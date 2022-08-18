import React from 'react';

const ImageGalleryItem = ({ pic, openModal }) => {
  return (
    <li className="gallery-item">
      <img
        src={pic.webformatURL}
        data-source={pic.largeImageURL}
        alt="img"
        className="gallery-item__image"
        onClick={openModal}
      />
    </li>
  );
};

export default ImageGalleryItem;
