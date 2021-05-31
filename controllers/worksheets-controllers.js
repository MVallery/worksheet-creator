const fs = require("fs");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const User = require("../models/user");
const Worksheet = require("../models/worksheet");
var express = require("express");

var router = express.Router();

const cap = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const getWorksheets = async (req, res, next) => {
  const userId = req.params.uid;
  let userWithWorksheets;
  try {
    userWithWorksheets = await User.findById(userId).populate("worksheets");
    // console.log(userWithWorksheets)
  } catch (err) {
    const error = new HttpError(
      "Fetching worksheets failed, please try again later.",
      500
    );
    return next(error);
  }
  if (!userWithWorksheets || userWithWorksheets.worksheets.length === 0) {
    throw new HttpError(
      "Could not find any worksheets. Try creating one!",
      404
    );
  }
  res.json({
    worksheets: userWithWorksheets.worksheets.map((worksheet) =>
      worksheet.toObject({ getters: true })
    ),
  });

  // let worksheets;
  // try {
  //   worksheets = await Worksheet.find({});
  // } catch (err) {
  //   const error = new HttpError(
  //     "Something went wrong, could not find a worksheet.",
  //     500
  //   );
  //   return next(error);
  // }
  // res.json({ worksheets: worksheets.map((worksheet) => worksheet.toObject({ getters: true }) });
};



const createWorksheet = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Worksheet data could not be generated", 422));
  }
  const { generalSelection, userSelection, creator, questAnswerList, created } = req.body;
  
  console.log(req.body);
  const createdWorksheet = new Worksheet({
    generalSelection,
    userSelection,
    creator,
    questAnswerList,
    created: created,
  });
  let user;
  console.log(`first createdWorksheet: ${createdWorksheet}`);
  try {
    user = await User.findById(creator);
    // console.log(user)
  } catch (err) {
    const error = new HttpError(
      "Creating worksheet data failed, please try again",
      500
    );
    return next(error);
  }
  console.log(user);
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdWorksheet.save({ session: sess });
    user.worksheets.push(createdWorksheet);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Saving worksheet data failed, please try again",
      500
    );
    return next(error);
  }

  res.status(201).json({ worksheet: createdWorksheet });
};

const updateWorksheet = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed,  please check your data", 422)
    );
  }
  const { title, description } = req.body;
  const worksheetId = req.params.wid;

  let worksheet;
  try {
    worksheet = await Worksheet.findById(worksheetId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update worksheet.",
      500
    );
    return next(error);
  }

  if (worksheet.creator.toString() !== req.userData.userId) {
    const error = new HttpError(
      "You are not allowed to edit this worksheet",
      401
    );
    return next(error);
  }

  worksheet.title = title;
  worksheet.description = description;

  try {
    await worksheet.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update worksheet",
      500
    );
    return next(error);
  }

  res.status(201).json({ worksheet: worksheet.toObject({ getters: true }) });
};

const deleteWorksheet = async (req, res, next) => {
  const worksheetId = req.params.wid;
  let worksheet;
  try {
    worksheet = await Worksheet.findById(worksheetId).populate("creator");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete worksheet data",
      500
    );
    return next(error);
  }

  if (!worksheet) {
    const error = new HttpError("Could not find worksheet for this id.", 404);
    return next(error);
  }
  // if (worksheet.creator.id !== req.userData.userId) {
  //   const error = new HttpError(
  //     "You are not allowed to delete this worksheet",
  //     401
  //   );
  //   return next(error);
  // }
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await worksheet.remove({ session: sess });
    worksheet.creator.worksheets.pull(worksheet);
    await worksheet.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete worksheet",
      500
    );
  }
  // fs.unlink(imagePath, (err) => {
  //   console.log(err);
  // });
  res.status(200).json({ message: "Deleted worksheet." });
};

exports.getWorksheets = getWorksheets;
exports.createWorksheet = createWorksheet;
exports.updateWorksheet = updateWorksheet;
exports.deleteWorksheet = deleteWorksheet;
