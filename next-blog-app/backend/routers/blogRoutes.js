import express from "express";
import Blog from "../models/BlogModel.js";
import multer from "multer";
import fs from "fs/promises";   
const router = express.Router();

    // install multer and fs for file upload
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });
           
        
   //add blog
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

    
  //get all blogs
router.get("/all", async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).send(blogs);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

     //Get book by id   

     router.get('/all/:id', async (req, res) => {
      try{
          const {id} = req.params;
          const blogs =  await Blog.findById(id);
         
          return res.status(200).json({
              count:blogs.length,
              data:blogs
          });

      }catch(error){

          console.log(error.message);
          res.status(500).send({message:error.message});
      }
   });


export default router;
