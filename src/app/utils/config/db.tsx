const mongoose = require("mongoose");

const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection error:", error); 
  }
};

export default DBconnection;

