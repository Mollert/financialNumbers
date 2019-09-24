
const express = require("express");
const request = require("request");
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const router = express.Router();
const port = process.env.PORT || 6700;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname ,"public")));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname ,"views"));

const mainPage = require("./controllers/mainPageRoute.js");
const dataPage = require("./controllers/dataPageRoute.js");
const errorPage = require("./controllers/errorPageRoute.js");

app.use("/", mainPage);
app.use("/apiData", dataPage);
app.use("/error", errorPage);

app.listen(port, () => console.log(`Tuned In and Turned On to port ${port}`));