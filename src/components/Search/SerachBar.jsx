import React, { useState } from "react";
import { NavLink, Link, useParams, useNavigate } from "react-router-dom";

const SearchBar = ({ handleSearch }) => {
  const navigate = useNavigate();
  const { term } = useParams();

  const [searchTerm, setSearchTerm] = useState(term || "");

  console.log(searchTerm);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-11">
          <Link to={`/search/${searchTerm}`}>
            <input
              className="search-input form-control text-decoration-none mb-3"
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </Link>
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      
    </>
  );
};

export default SearchBar;
