import User from "../model/userModel.js";
import fs from "fs";

const CreateAUser = async (req, res) => {
  try {
    const { email, password } = req.fields;
    const { photo } = req.files;
    const user = new User({ ...req.fields });
    if (photo) {
      user.photo.data = fs.readFileSync(photo.path);
      user.photo.contentType = photo.type;
    }

    const result = await user.save();
    res.json({
      status: "Success",
      result,
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: error.message,
    });
  }
};

const GetAUser = async (req, res) => {
  try {
    const email = req.query.email;

    const query = {
      email: email,
    };

    const user = await User.findOne(query).select("-photo");

    res.json({
      status: "success",
      user,
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: error.message,
    });
  }
};

const GetUserImage = async (req, res) => {
  try {
    const email = req.query.email;

    const query = {
      email: email,
    };

    const photo = await User.findOne(query).select("photo");

    if (photo?.photo?.data) {
      res.set("Content-type", photo.photo.contentType);
      res.send(photo.photo.data);
    }
  } catch (error) {
    res.json({
      status: "fail",
      message: error.message,
    });
  }
};

export { CreateAUser, GetAUser, GetUserImage };
