import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  photo: {
    data: Buffer,
    contentType: String,
  },
});

const User = mongoose.model("users", userSchema);

export default User;
