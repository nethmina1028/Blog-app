import express from 'express'; //1
import {PORT,mongoDBURL} from './config.js'; //3
import mongoose from 'mongoose';  //5
import blogRoutes from './routers/blogRoutes.js'; 
import cors from 'cors'; //16



const app = express(); 

//Middleware for parsing json data
app.use(express.json()); //7.2


//Middleware for cors

app.use(cors()); //16.2


app.get('/',(req,res)=>{   //4
    console.log(req)
     return res.status(234).send('Hello World');
 });

 


app.use('/blog',blogRoutes);
 
 mongoose                      //5
    .connect(mongoDBURL)

    .then(()=>{
        console.log('MongoDB connected');
        app.listen(PORT,()=>{          //3
            console.log(`Server is running on port ${PORT}`);
        });

    })
    .catch((error)=>{
         console.log(error);
    });