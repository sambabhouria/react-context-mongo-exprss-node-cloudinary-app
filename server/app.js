//https://andela.com/insights/how-to-use-cloudinary-and-nodejs-to-upload-multiple-images/
import express from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import postRoutes from "./routes/posts.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  fileUpload({
    tempFileDir: "./upload",
    useTempFiles: true,
  })
);

app.use(express.static(path.join(__dirname, "../client/build")));

// Routes
app.use("/api", postRoutes);

export { app };
