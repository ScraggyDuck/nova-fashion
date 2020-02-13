import { Document } from "mongoose";

export interface User extends Document {
  username: String;
  readonly password: String;
  createdAt: Date;
}
