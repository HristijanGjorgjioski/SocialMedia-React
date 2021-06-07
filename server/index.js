import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRoutes from './routes/users-routes.js';
import postRoutes from './routes/posts-routes.js';

const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb+srv://social-media:12345@cluster0.u2uu1.mongodb.net/social-media?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/post", postRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
