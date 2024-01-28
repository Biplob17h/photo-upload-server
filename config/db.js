import mongoose from "mongoose";

// user : photo-upload
// pass : 6G4TuiReskDmDvkn

const connectDB = async () => {
  try {
    const connect = mongoose.connect(
      "mongodb+srv://photo-upload:6G4TuiReskDmDvkn@cluster0.ro3yhcf.mongodb.net/phto-upload"
    );
    console.log(`Mongodb Connect `.bgWhite.green.bold);
  } catch (error) {
    console.log(`error in mongodb ${error.message} `.bgWhite.red.bold);
  }
};

export default connectDB;
