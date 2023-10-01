const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconection");
const config = require("./config/config");
const routes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(`./public`));

app.use("/v1", routes);

//db connection
connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server is started");
});
