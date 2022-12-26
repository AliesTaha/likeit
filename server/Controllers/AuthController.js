import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

// Register new user
export const registerUser = async (req, res) => {

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass
  const newUser = new UserModel(req.body);
  const {username} = req.body
  try {
    // addition new
    const oldUser = await UserModel.findOne({ username });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    // changed
    const user = await newUser.save();
    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login User

export const loginUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await UserModel.findOne({username: username})

        if(oldUser){
          return res.status(400).json({message:"username is already registered here"})
        }


        if(user)
        {
            const valid = await bcrypt.compare(password, user.password)


            valid? res.status(200).json(user): res.status(400).json("Wrong Password :( You're not a heckr are you? O-o")
        }
        else{
            res.status(404).json("User does not exist :(, check your username :)")
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}