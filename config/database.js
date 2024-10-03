import mongoose from "mongoose";

let connected = false;
async function connectedDB() {
  mongoose.set("strictQuery", true);
  //   if alreedy connected data
  if (connected) {
    console.log("mongodb isrn  already connecterd ");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
}
export default connectedDB;
