import mongoose from "mongoose";

 export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://nethmina1028:pabasara@cluster0.ufjfoyi.mongodb.net/blog-app');
    console.log("DB connected");
}