import { model } from "mongoose";
import UserSchema from "../database/schema/user.schema";

const User = model("user", UserSchema);

export default User;
