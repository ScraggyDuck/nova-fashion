export interface CreateProductDTO {
  name: String;
  images: [String];
  price: Number;
  desciription: String;
  regularPrice: Number;
  colors: [String];
  ratingsQuantity: Number;
  quantity: Number;
  sizes: [String];
  categories: [String];
  createdAt: Date;
  isFeatured: Boolean;
}
