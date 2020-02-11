export interface CreateProductDTO {
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
