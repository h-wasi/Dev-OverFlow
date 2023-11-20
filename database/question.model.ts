import { Schema, models, model, Document } from "mongoose";

export interface Iquestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[];
  views: number;
  upotes: Schema.Types.ObjectId[];
  downotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId[];
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const QuestionSchema = new Schema({
  title: { type: "string", required: true },
  content: { type: "string", required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  views: { type: "number", default: 0 },
  upotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: [{ type: Schema.Types.ObjectId, ref: "User" }],
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  createdAt: { type: Date, default: Date.now },
});

const Question = models.Question || model("Question", QuestionSchema);
export default Question;
