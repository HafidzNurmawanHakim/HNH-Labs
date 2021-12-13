import Axios from "axios";

export const setDataBanner = (perPage) => {
  return (dispatch) => {
    Axios.get(`http://localhost:4000/articles?perPage=${perPage}`)
      .then((result) => {
        const responseAPI = result.data;
        dispatch({ type: "UPDATE_DATA_ARTICLE", payload: responseAPI.data });
        dispatch({ type: "UPDATE_DATA_BANNER", payload: { totalData: responseAPI.total_data } });
        console.log(responseAPI);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setDataPopularSection = () => {
  return (dispatch) => {
    Axios.get("http://localhost:4000/articles?perPage=4")
      .then((result) => {
        const responseAPI = result.data;
        dispatch({ type: "UPDATE_DATA_POPULAR_SECTION", payload: responseAPI.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const setDataMainCard = () => {
  return (dispatch) => {
    Axios.get("http://localhost:4000/articles?perPage=1")
      .then((result) => {
        const responseAPI = result.data;
        dispatch({ type: "UPDATE_DATA_MAIN_CARD", payload: responseAPI.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const setDataImageCarousel = () => {
  return (dispatch) => {
    Axios.get("http://localhost:4000/articles")
      .then((result) => {
        const responseAPI = result.data;
        dispatch({ type: "UPDATE_DATA_IMAGE_CAROUSEL", payload: responseAPI.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setDataTripleCard = () => {
  return (dispatch) => {
    Axios.get("http://localhost:4000/articles?perPage=3")
      .then((result) => {
        const responseAPI = result.data;
        dispatch({ type: "UPDATE_DATA_TRIPLE_CARD", payload: responseAPI.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


