import express from "express";
import Blog from "../models/BlogModel.js";
import multer from "multer";
import fs from "fs/promises";   
const router = express.Router();

    // install multer and fs for file upload
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });
           
        

router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const { file } = req;

    if (!title || !description || !category || !file) {
      return res.status(400).send({ message: "Send all required fields" });
    }
    const timestamp = Date.now();
    const imagePath = `./public/${timestamp}_${file.originalname}`;
    await fs.writeFile(imagePath, file.buffer);
    const imageUrl = `/${timestamp}_${file.originalname}`;

    const newBlog = {
      title,
      description,
      category,
      image: imageUrl,
    };

    const blog = await Blog.create(newBlog);
    return res.status(201).send(blog);
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
