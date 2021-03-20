const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const checkAuth = require('../middleware/check-auth')
const worksheetsControllers = require('../controllers/worksheets-controllers')

router.get('/:uid', worksheetsControllers.getWorksheets)

router.patch('/:uid/:wid', worksheetsControllers.updateWorksheet)

router.delete('/:wid', worksheetsControllers.deleteWorksheet)

router.post('/:uid/', worksheetsControllers.createWorksheet)

module.exports=router
