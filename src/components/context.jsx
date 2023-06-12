import React, { createContext, useState } from "react";

export const ImageSnapshotContext = createContext();

const ImageSnapshotContextProvider = ({ children }) => {
  const [images, setImages] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ImageSnapshotContext.Provider
      value={{
        images,
        setImages,
        searchTerm,
        setSearchTerm,
        selectedImage,
        setSelectedImage,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ImageSnapshotContext.Provider>
  );
};

export default ImageSnapshotContextProvider;
