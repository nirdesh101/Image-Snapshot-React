import React, { useEffect } from "react";
import axios from "axios";
import ImageGallery from "../Image/ImageGallery";
import Header from "../Header";
import SearchBar from "../Search/SerachBar";
import Buttons from "./Buttons";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner";
import { ImageSnapshotContext } from "../context";
import { useContext } from "react";
import { API_KEY } from "../../constants/API";

function HomeButtons({ buttonName }) {
  const {
    images,
    setImages,
    isLoading,
    setIsLoading,
    selectedImage,
    setSelectedImage,
  } = useContext(ImageSnapshotContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchCategoryImages(buttonName);
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
      setIsLoading(true);

      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=${category}&count=100&client_id=${API_KEY}`
      );
      setImages(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    navigate(`/${buttonName}/${image.id}`);
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
        {isLoading ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : selectedImage ? (
          <div className="selected-image-container">
            <Link to={`/${buttonName}/${selectedImage.id}`}>
              <img
                className="selected-image d-flex justify-content-center"
                src={selectedImage.urls.regular}
              />
            </Link>
            <button onClick={() => setSelectedImage(null)}>
              Back to Gallery
            </button>
          </div>
        ) : (
          <ImageGallery images={images} handleImageClick={handleImageClick} />
        )}
      </div>
    </>
  );
}

export default HomeButtons;
