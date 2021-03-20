const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const worksheetSchema = new  Schema({
  generalSelection: {type:Object, required:true },
  userSelection: {type: Array, required: true},
  creator: {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
  createdAt: {type:Date, default: new Date().toString()},
  questAnswerList: {type:Object, required:true }


})

module.exports = mongoose.model('Worksheet', worksheetSchema);