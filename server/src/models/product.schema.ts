import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  regularPrice: Number,
  colors: [],
  ratingsQuantity: Number,
  quantity: Number,
  size: String,
  categories: []
});
