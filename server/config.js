import { config } from "dotenv";
config();

export const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://userdatabase:bhouriamongodbatlas123@shoeshop.0ybin.mongodb.net/tododemo?retryWrites=true&w=majority";
export const PORT = process.env.PORT;

export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;