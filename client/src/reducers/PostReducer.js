const postReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action
) => {

  //The switch depends on action.type
  switch (action.type) {
    // belongs to PostShare.jsx
    case "UPLOAD_START":
      return { ...state,  uploading: true, error: false };
    
    
      case "UPLOAD_SUCCESS":
      return { ...state, posts: [action.data, ...state.posts], uploading: false, error: false };
    
    
      case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    // belongs to Posts.jsx
  
  
      default:
      return state;
  }
};

export default postReducer;
