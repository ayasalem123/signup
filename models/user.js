import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  age: Number,
  password: String
});
 const User=mongoose.model('User',userSchema);
 export default User;