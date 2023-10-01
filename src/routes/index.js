const express = require("express");

const userRoute = require("./user.route");
const contect_usRoute = require("./contect_us.route");
const sport_categoryRoute = require("./sport_category.route");
const sportgalleryRoute = require("./sportgalery.route");
const founderRoute = require("./founder.route");
const teamRoute = require("./team.route");
const tournamentRoute = require("./tournament.route");
const newsRoute = require("./news.route");
const playerRoute = require("./player.route");
const resultRoute = require("./result.route");
const coachRoute = require("./coach.route");
const tokenRoute = require("./token.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/contect_us", contect_usRoute);
router.use("/sport_category", sport_categoryRoute);
router.use("/sportgallery", sportgalleryRoute);
router.use("/founder", founderRoute);
router.use("/team", teamRoute);
router.use("/tournament", tournamentRoute);
router.use("/news", newsRoute);
router.use("/player", playerRoute);
router.use("/result", resultRoute);
router.use("/coach", coachRoute);
router.use("/token", tokenRoute);

module.exports = router;