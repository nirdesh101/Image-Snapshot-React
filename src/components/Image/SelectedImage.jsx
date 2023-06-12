// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const API_KEY = "cDdBP_juYOO4kVRwAiDmMlVm-mASLLr4583oCYSWNYc";

// function SelectedImage() {
//   const { id } = useParams();
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         setLoading(true);

//         const response = await axios.get(
//           `https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`
//         );
//         setImage(response.data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImage();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!image) {
//     return <div>Image not found.</div>;
//   }

//   return (
//     <div className="selected-image-container d-flex align-items-center justify-content-center">
//       <div className="image-wrapper d-flex align-items-center justify-content-center 0">
//         <img
//           className="selected-image"
//           src={image.urls.regular}
//           alt={image.alt_description}
//         />
//       </div>
//     </div>
//   );
// }

// export default SelectedImage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_KEY = "dcnjKxLacI8Tu4JbLBUMKtHWF-OpdMmw16RP1xf0frM";

function SelectedImage() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);

        // const response = await axios.get(
        //   `https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`
        // );
        const response = await axios.get(
          `https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`
        );

        console.log(response.data, "data");
        setImage(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [id]);

  console.log(image,`rhgrhrh`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!image) {
    return <div>Image not found.</div>;
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
