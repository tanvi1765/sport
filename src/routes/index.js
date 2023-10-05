const express = require("express");

const userRoute = require("./user");
const contactRoute = require("./contact");
const sport_categoryRoute = require("./sport_category");
const sportgalleryRoute = require("./sportgalery");
const founderRoute = require("./founder");
const teamRoute = require("./team");
const tournamentRoute = require("./tournament");
const newsRoute = require("./news");
const playerRoute = require("./player");
const resultRoute = require("./result");
const coachRoute = require("./coach");
const tokenRoute = require("./token");

const router = expressr();

router.use("/user", userRoute);
router.use("/contact", contactRoute);
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