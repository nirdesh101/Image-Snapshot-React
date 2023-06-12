import React from "react";

const ImageGallery = ({ images, handleImageClick }) => {
  return (
    <div className="container p-3">
      <div className="image-container d-flex flex-wrap justify-content-center">
        {images.map((image) => (
          <div
            className="image-card m-3"
            key={image.id}
            onClick={() => handleImageClick(image)}
          >
            <img
              className="image"
              src={image.urls.regular}
              alt={image.alt_description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
