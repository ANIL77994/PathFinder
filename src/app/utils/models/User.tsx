import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  role: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Add unique constraint
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Optionally, you can make email unique as well
  role: { type: String, default: "user" },
});

const UserModel = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default UserModel;
