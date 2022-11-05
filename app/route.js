const express = require("express");
const app = express();
const router = new express.Router();
const path = require("path");
app.use(router);

//controllers
const signup = require("./controller/signup");
const login = require("./controller/login");
const fetchFoodCollectors = require("./controller/fetchFoodCollectors");
const binLocations = require("./controller/binLocator");
const imagePredictor = require("./controller/imagePredictor");
const verifyjwt = require("./controller/auth");
const eWasteInfo = require("./controller/eWasteForm");

//routes
router.post("/signup", signup, (req, res) => {
  console.log("Signed Up");
});

router.post("/login", login, (req, res) => {
  console.log("User Logged In!");
});

router.get("/foodcollectors", fetchFoodCollectors, (req, res) => {
  console.log("Fetched food collectors successfully!!");
});

router.get("/binlocations", binLocations, (req, res) => {
  console.log("Fetched nearest 5 bins successfully!!");
});

router.post("/imageprediction", imagePredictor, (req, res) => {
  console.log("Image Predicted Successfully!!");
});

const multer = require("multer");
const upload = multer({ dest: path.join(__dirname, "/public") });
router.post("/uploadfiles", upload.single("image"), eWasteInfo);

module.exports = router;
