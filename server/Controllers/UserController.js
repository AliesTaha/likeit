import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

//get all users
export const getAllUsers= async (req, res)=>{
  try {
    let users = await UserModel.find()
    users=users.map((user)=>{
      const {password, ...otherDetails}=user._doc
      return otherDetails
    })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}


//Getting a User
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);

    if (user) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user exists :( Alien?");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Updating a user
export const updateUser = async (req, res) => {
  const id = req.params.id;
// console.log("Data Received", req.body)
const { _id, currentUserAdmin, password } = req.body;
  
if (id === _id) {
  try {
    // if we also have to update password then password will be bcrypted again
    if (password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(password, salt);
    }
    // have to change this
    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({user, token});
  } catch (error) {
    res.status(500).json(error);
  }
} else {
  res
    .status(403)
    .json("Access Denied! This isn't you, literally =_=");
}
};


// Deleting users
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId, currentUserAdminStatus } = req.body;

  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("Has been deleted :(...*sad noises*");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! You can only delete you...let other people be :(");
  }
};

// Follow users: It is social media after all
export const followUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId } = req.body;

  if (currentUserId === id) {
    res.status(403).json("Action forbidden: Can't follow yourself :( kinda sad you tried...");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      if (followUser.followers.includes(currentUserId)) {
        res.status(403).json("Can't follow someone twice ;)");
      } else {
        //Push the user following inside followers array of followed user
        //Basically updating followers array of person being followed
        await followUser.updateOne({ $push: { followers: currentUserId } }); 
        
        //Update following array of person following
        await followingUser.updateOne({ $push: { following: id } });
        
        res.status(200).json("Following them! First steps of a friendship :)");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

// UnFollow a User
export const UnFollowUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId } = req.body;

  if (currentUserId === id) {
    res.status(403).json("Action Forbidden...love yourself man, can't unfollow yourself.");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      if (followUser.followers.includes(currentUserId)) {

        //Remove the unfollower from the followers list of the unfollowed
        await followUser.updateOne({ $pull: { followers: currentUserId } });

        //Remove the unfollowed from the following array of the unfollower
        await followingUser.updateOne({ $pull: { following: id } });

        //Guilt trip the unfollower into following the person back hahahaha
        res.status(200).json("User Unfollowed...What did they do =_=");
      } else {
        res.status(403).json("You don't even follow them ^_^");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};