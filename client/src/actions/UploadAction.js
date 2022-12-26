import * as UploadApi from "../api/UploadRequest";


//Export data
export const uploadImage = (data) => async (dispatch) => {
  try {
    //upload api carries data of image
    console.log("Image upload action is starting")
    await UploadApi.uploadImage(data);
  } catch (error) {
    //In case of any error
    console.log(error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost =await UploadApi.uploadPost(data)
    //This is not controller this is request
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" })
  }
}