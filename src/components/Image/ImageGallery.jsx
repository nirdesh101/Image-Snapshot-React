import React, { useState , useContext} from 'react';
import { ImageSnapshotContext } from '../context';

const ImageGallery = ({ images ,handleImageClick, handleSearch }) => {
  // const { images } = useContext(ImageSnapshotContext);
  const [searchTerm, setSearchTerm] = useState('');

  // const handleInputChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   handleSearch(searchTerm);
  // };

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
