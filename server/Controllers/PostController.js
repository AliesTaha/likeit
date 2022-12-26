import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

// Create new Post
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json("You made a new post!");
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a post

export const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a post
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated :)");
    } else {
      res.status(403).json("Action forbidden...not your post :(");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted successfully...why though?");
    } else {
      res.status(403).json("Action forbidden...not your post o-O");
    }
  } catch (error) {
    res.status(500).json(error); 
  }
};

// Like and remove like of a post
export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (!post.likes.includes(userId)) {
      //Put the liker in the array of likes
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    } else {
      //Remove the liker from the array of likes
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post Unliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get Timeline Posts (show posts of followers)
//Show posts of the person himself
export const getTimelinePosts = async (req, res) => {
  const userId = req.params.id;

  try {

    //Receive post of current user, returning posts of user
    const currentUserPosts = await PostModel.find({ userId: userId });
    
    //Returning posts of user following
    const followingPosts = await UserModel.aggregate([
      {
        //I don't really understand aggregate but like
        //Match query gives a single document contains id
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      //Lookup will match the document, place query on user model
      //Get result from post model
      //Aggregate pipeline compares it from user to post model
      {
        $lookup: {

          //Integrate with post model
          from: "posts",

          //local field has array of user ids of following, so im matching them
          localField: "following",
          foreignField: "userId",
          //result as following posts
          as: "followingPosts",
        },
      },
      {
        //which field you want to return from the pipeline
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res
      .status(200)
      //need to spread the object...outside the array...spread it
      .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
      
      //sort according to time, as it should be
      .sort((a,b)=>{
          return b.createdAt - a.createdAt; //this gives latest post first
          //return b then return a 
      })
      );
  } catch (error) {
    res.status(500).json(error);
  }
};