const initialState = {
  posts: []
};

// state = store
export function RootReducer(state = initialState, action) {
  switch (action.type) {
    case "AddPosts":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
