const initialStateHome = {
  dataArticle: [],
  dataPopularSection: [],
  dataMainCard: [],
  dataImageCarousel: [],
  dataTripleCard: [],
  page: {
    totalData: 5,
  },
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "UPDATE_DATA_ARTICLE") {
    return {
      ...state,
      dataArticle: action.payload,
    };
  }

  if (action.type === "UPDATE_DATA_BANNER") {
    return {
      ...state,
      page: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_POPULAR_SECTION") {
    return {
      ...state,
      dataPopularSection: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_MAIN_CARD") {
    return {
      ...state,
      dataMainCard: action.payload,
    };
  }
  if (action.type === "UPDATE_DATA_IMAGE_CAROUSEL") {
    return {
      ...state,
      dataImageCarousel: action.payload,
    };
  }

  if (action.type === "UPDATE_DATA_TRIPLE_CARD") {
    return {
      ...state,
      dataTripleCard: action.payload,
    };
  }
  return state;
};

export default homeReducer;
