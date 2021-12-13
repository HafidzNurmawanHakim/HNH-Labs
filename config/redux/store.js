import reducer from "./reducer/reducer";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

// const initialStateNews = {
//   dataArticle: [],
// };

// const NewsReducer = (state = initialStateNews, action) => {
//   if (action.type === "UPDATE_DATA_ARTICLE") {
//     return {
//       ...state,
//       dataArticle: action.payload,
//     };
//   }
//   return state;
// };

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
