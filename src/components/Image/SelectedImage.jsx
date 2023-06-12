import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../constants/API";

function SelectedImage() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`
        );

        setImage(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [id]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!image) {
    return <div className="text-white">Image not found.</div>;
  }

  return (
    <div className="selected-image-container d-flex align-items-center justify-content-center">
      <div className="image-wrapper d-flex align-items-center justify-content-center">
        <img
          className="selected-image"
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
    </div>
  );
}

export default SelectedImage;
