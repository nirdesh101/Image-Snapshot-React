import React, { useEffect, useContext } from "react";
import axios from "axios";
import Header from "../Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import ImageGallery from "../Image/ImageGallery";
import SearchBar from "./SerachBar";
import Buttons from "../Buttons/Buttons";
import Spinner from "../Spinner";
import { ImageSnapshotContext } from "../context";
import { API_KEY } from "../../constants/API";

function Search() {
  const {
    searchTerm,
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
    if (id) {
      const image = images.find((image) => image.id === id);
      setSelectedImage(image);
    } else {
      setSelectedImage(null);
    }
  }, [id, images]);

  const handleSearch = async (searchTerm) => {
    setSearchTerm(searchTerm);
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=${searchTerm}&count=100&client_id=${API_KEY}`
      );
      setImages(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryClick = async (category) => {
    setSearchTerm(category);
    try {
      console.log("55555");
      setIsLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=${category}&count=20&client_id=${API_KEY}`
      );
      setImages(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    navigate(`/search/${searchTerm}/${image.id}`);
  };

  return (
    <div className="container">
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <Buttons handleCategoryClick={handleCategoryClick} />
      {isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : selectedImage ? (
        <div className="selected-image-container">
          <Link to={`/search/*/${selectedImage.id}`}>
            {console.log(selectedImage.id)}
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

export default Search;
