const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Please provide company name"],
    maxlength: 50,
  },
  position: {
    type: String,
    required: [true, "Please provide position"],
    maxlength: 100,
  },
  status: {
    type: String,
    enum: ["interview", "declined", "pending"],
    default: "pending",
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
}, { timestamps: true });

jobSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();

    delete returnedObj._id;
    delete returnedObj.__v;
  }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;