import express  from 'express'; //1
import {PORT,mongoDBURL} from './config.js'; //3
import mongoose from 'mongoose';  //5

const app = express(); //2


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

app.get('/',(req,res)=>{   //4
    console.log(req)
     return response.status(234).send('Hello World')
 });
 