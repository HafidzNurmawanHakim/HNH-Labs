const initialState = {
  name: "HafidzNh",
  readPost: "",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "ganteng",
    };
  }

  if (action.type === "UPDATE_DATA_READ_POST") {
    return {
      ...state,
      readPost: action.payload,
    };
  }
  return state;
};

export default globalReducer;
