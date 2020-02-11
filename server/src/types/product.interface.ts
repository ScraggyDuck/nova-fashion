import { Document } from "mongoose";

export interface Product extends Document {
  name: String;
  image: String;
  price: Number;
  regularPrice: Number;
  colors: [String];
  ratingsQuantity: Number;
  quantity: Number;
  size: String;
  categories: [String];
  createdAt: Date;
  isFeatured: Boolean;
}
