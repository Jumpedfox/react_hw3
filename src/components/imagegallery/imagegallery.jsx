import React from 'react';
import ImageGalleryItem from 'components/imagegalleryitem/imagegalleryitem';

const ImageGallery = ({ gallery, openModal }) => {
  return (
    <ul className="gallery">
      {gallery.map(pic => (
        <ImageGalleryItem pic={pic} key={pic.id} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
