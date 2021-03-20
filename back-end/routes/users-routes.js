const express = require("express");
const fileUpload = require('../middleware/file-upload')
const router = express.Router();
const usersControllers = require('../controllers/users-controllers')

const { check } = require("express-validator");


router.post(
  "/signup",
  fileUpload.single('image'),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersControllers.signup
);

router.post("/login", usersControllers.login);

router.get('/:uid', usersControllers.getUser)

module.exports = router;
