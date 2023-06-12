const Routes = {
  HOME: " /",
  FOOD: {
    INDEX: "/food",
    imageId: "/food/ : imageId",
  },
  BIRDS: {
    INDEX: "/birds",
    imageId: "birds/: imageId",
  },

  ANIMALS: {
    INDEX: "/animals",
    imageId: "/animals/:imageId",
  },
  MOUNTAIN: {
    INDEX: "/mountain",
    imageId: "/mountain/: imageId",
  },

  SEARCH: {
    INDEX: "/search/:text",
    imageId: "/search/:text/: imageId",
  },
};

export default Routes;
