import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  userId: string;
  name: string;
  email: string;
}

const UsersSchema = new Schema<IUser>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const Users = mongoose.model<IUser>("Users", UsersSchema);
