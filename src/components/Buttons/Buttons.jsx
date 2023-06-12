import React from 'react';
import { NavLink } from 'react-router-dom';

const Buttons = ({ handleCategoryClick }) => {
  return (
    <div className="all-buttons d-flex justify-content-center">
      <NavLink to="/food">
        <button
          className="category-buttons my-3 mx-4 border-2 rounded text-bg-dark py-1 px-3"
          onClick={() => handleCategoryClick('food')}
        >
          FOOD
        </button>
      </NavLink>
      <NavLink to="/birds">
        <button
          className="category-buttons my-3 mx-4 border-2 rounded text-bg-dark py-1 px-3"
          onClick={() => handleCategoryClick('birds')}
        >
          BIRDS
        </button>
      </NavLink>
      <NavLink to="/animals">
        <button
          className="category-buttons my-3 mx-4 border-2 rounded text-bg-dark py-1 px-3"
          onClick={() => handleCategoryClick('animals')}
        >
          ANIMALS
        </button>
      </NavLink>
      <NavLink to="/mountains">
        <button
          className="category-buttons my-3 mx-4 border-2 rounded text-bg-dark py-1 px-3"
          onClick={() => handleCategoryClick('mountains')}
        >
          MOUNTAINS
        </button>
      </NavLink>
    </div>
  );
};

export default Buttons;
