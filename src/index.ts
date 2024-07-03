import express from 'express';
import mongoose from 'mongoose';
import {json} from 'body-parser';

import { todoRouter } from './routes/todo';

const app = express();
app.use(json())
app.use(todoRouter)

const dbUri = "YOUR_MONGO_DATABASE_CONNECTION_STRING";
mongoose.connect(dbUri).then(() => console.log('Connected to db!'));

app.listen(3000, () => {
    console.log("listening on port 3000");
})
