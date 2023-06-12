import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { API_KEY } from "../../constants/API";
import { ImageSnapshotContext } from "../context";
import axios from "axios";

const Buttons = () => {
  const { setIsLoading, setImages, setSearchTerm } =
    useContext(ImageSnapshotContext);

  const handleCategoryClick = async (category) => {
    setSearchTerm(category);
    try {
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

  return (
    <div className="all-buttons d-flex justify-content-center">
      <NavLink to="/food">
        <button
          className="category-buttons my-3 mx-4 border-2 rounded text-bg-dark py-1 px-3"
          onClick={() => handleCategoryClick("food")}
          value="food"
        >
          FOOD
        </button>
      </NavLink>
      <NavLink to="/birds">
        <button
          className="category-buttons my-3 mx-4 border-2 rounded text-bg-dark py-1 px-3"
          onClick={() => handleCategoryClick("birds")}
          value="birds"
        >
          BIRDS
        </button>
      </NavLink>
      <NavLink to="/animals">
        <button
          className="category-buttons my-3 mx-4 border-2 rounded text-bg-dark py-1 px-3"
          onClick={() => handleCategoryClick("animals")}
          value="animals"
        >
          ANIMALS
        </button>
      </NavLink>
      <NavLink to="/mountains">
        <button
          className="category-buttons my-3 mx-4 border-2 rounded text-bg-dark py-1 px-3"
          onClick={() => handleCategoryClick("mountains")}
          value="mountains"
        >
          MOUNTAINS
        </button>
      </NavLink>
    </div>
  );
};

export default Buttons;
