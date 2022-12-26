import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    //Required: true means it is necessary
    //Posts dont HAVE to include an image, but should :_
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
  },
  {
    //Like date of post
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
