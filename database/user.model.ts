import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  userName: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema(
  {
    clerkId: { type: "string", required: true },
    name: { type: "string", required: true },
    userName: { type: "string", required: true, unique: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string" },
    bio: { type: "string" },
    picture: { type: "string", required: true },
    location: { type: "string" },
    portfolioWebsite: { type: "string" },
    reputation: { type: "number", default: 0 },
    saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    joinedAt: { type: Date, default: Date.now },
  },
  { collection: "users" }
);

const User = models.User || model("User", UserSchema);
export default User;
