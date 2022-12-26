import express from 'express'

const router=express.Router()

import multer from 'multer'

//Code that remains always same\

const storage = multer.diskStorage({
    //Folder available for public to use
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, sfile, cb) => {
      cb(null, req.body.name);
    },
  });
const upload = multer({ storage: storage });


//Defining router, saves by post method

//Middleware provided by the multer
router.post("/", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("You have uploaded successfully!");
    } 
    
    catch (error) {
      console.error(error);
    }
  });

export default router
