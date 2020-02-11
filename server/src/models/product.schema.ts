import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  regularPrice: Number,
  colors: [String],
  ratingsQuantity: Number,
  quantity: Number,
  size: String,
  categories: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
});
