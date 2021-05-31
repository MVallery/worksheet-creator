const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const worksheetSchema = new  Schema({
  generalSelection: {type:Object, required:true },
  userSelection: {type: Array, required: true},
  creator: {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
  created: {type:String, required: true},
  questAnswerList: {type:Object, required:true }


})

module.exports = mongoose.model('Worksheet', worksheetSchema);