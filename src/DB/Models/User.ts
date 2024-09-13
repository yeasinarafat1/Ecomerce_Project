import mongoose, { models } from "mongoose";
const userschema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = models?.users || mongoose.model("users", userschema);
export default User;
