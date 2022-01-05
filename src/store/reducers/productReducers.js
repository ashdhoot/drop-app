const initialState = {
  myfilm: {},
  character: {},
};

const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET__MY__FILM":
      return {
        ...state,
        myfilm: payload,
      };
    case "GET__CHARACTER":
      return {
        ...state,
        character: payload,
      };
    default:
      return state;
  }
};

export default productReducers;
