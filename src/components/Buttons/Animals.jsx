import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "../Image/ImageGallery";
import Header from "../Header";
import SearchBar from "../Search/SerachBar";
import Buttons from "./Buttons";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner";
import { ImageSnapshotContext } from "../context";
import { useContext } from "react";

const API_KEY = "dcnjKxLacI8Tu4JbLBUMKtHWF-OpdMmw16RP1xf0frM";

function Animals() {
  const { images, setImages } = useContext(ImageSnapshotContext)
  // const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchCategoryImages("animals");
  }, []);

  useEffect(() => {
    if (id) {
      const image = images.find((image) => image.id === id);
      setSelectedImage(image);
    } else {
      setSelectedImage(null);
    }
  }, [id, images]);
  

  const fetchCategoryImages = async (category) => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=${category}&count=100&client_id=${API_KEY}`
      );
      setImages(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    navigate(`/animals/${image.id}`);
  };

  const handleCategoryClick = async (category) => {
    await fetchCategoryImages(category);
  };

  return (
    <>
      <div className="container">
        <Header />
        <SearchBar />
        <Buttons handleCategoryClick={handleCategoryClick} />
        {loading ? (
        <div className="text-center">
          <Spinner />
        </div>
        ) : selectedImage ? (
          <div className="selected-image-container">
            <Link to={`/animals/${selectedImage.id}`}>
              <img
                className="selected-image d-flex justify-content-center"
                src={selectedImage.urls.regular}
              />
            </Link>
            <button onClick={() => setSelectedImage(null)}>Back to Gallery</button>
          </div>
        ) : (
          <ImageGallery images={images} handleImageClick={handleImageClick} />
        )}
      </div>
    </>
  );
}

export default Animals;
