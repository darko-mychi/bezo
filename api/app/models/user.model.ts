import { genSalt, hash } from "bcrypt";
import { model } from "mongoose";
import UserSchema from "../database/schema/user.schema";

UserSchema.pre("save", async function(next) {
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
    next();
});

const User = model("user", UserSchema);

export default User;
