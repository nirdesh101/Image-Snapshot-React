import React, { useEffect, useContext } from "react";
import axios from "axios";
import Header from "./Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import ImageGallery from "./Image/ImageGallery";
import SearchBar from "./Search/SerachBar";
import Buttons from "./Buttons/Buttons";
import Spinner from "./Spinner";
import { ImageSnapshotContext } from "./context";
import { API_KEY } from "../constants/API";

// const API_KEY = API_KEY

function Home() {
  const {
    setSearchTerm,
    images,
    setImages,
    selectedImage,
    setSelectedImage,
    isLoading,
    setIsLoading,
  } = useContext(ImageSnapshotContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("hiii");
    fetchRandomImages();
  }, []);

  useEffect(() => {
    if (id) {
      const image = images.find((image) => image.id === id);
      setSelectedImage(image);
    } else {
      setSelectedImage(null);
    }
  }, [id, images]);

  const fetchRandomImages = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?count=100&client_id=${API_KEY}`
      );
      setImages(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    navigate(`/${image.id}`);
  };

  return (
    <div className="container">
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <Buttons />
      {isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : selectedImage ? (
        <div className="selected-image-container">
          <Link to={`/${selectedImage.id}`}>
            <div className="d-flex justify-content-center">
              <img
                className="selected-image"
                src={selectedImage.urls.regular}
              />
            </div>
          </Link>
        </div>
      ) : (
        <ImageGallery images={images} handleImageClick={handleImageClick} />
      )}
    </div>
  );
}

export default Home;
