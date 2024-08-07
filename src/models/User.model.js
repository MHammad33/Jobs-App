const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const config = require("../utils/config");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please provide valid email"
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
  },
});

userSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();

    delete returnedObj.password;
    delete returnedObj._id;
    delete returnedObj.__v;
  }
})

userSchema.pre("save", async function () {
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
  const userForToken = {
    userId: this._id,
    name: this.name,
  };
  const token = jwt.sign(userForToken, config.JWT_SECRET, {
    expiresIn: config.JWT_LIFETIME
  }
  );
  return token;
}

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcryptjs.compare(candidatePassword, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;