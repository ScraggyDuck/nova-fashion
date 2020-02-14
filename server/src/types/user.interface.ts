import { Document } from "mongoose";

export interface User extends Document {
  readonly password: String;
  gender: String;
  birthdate: String;
  firstName: String;
  lastName: String;
  email: String;
  createdAt: Date;
}
