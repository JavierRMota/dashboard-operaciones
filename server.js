const express = require("express");
const admin = require("./routes/admin");
const adminMod = require("./models/admin");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

const db_url = "mongodb://localhost/dbCompanias";
mongoose.connect(db_url, { userNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;

app.use("/api/compania", admin);
db.on("error", console.error.bind(console, "Error en la conexión"));
db.once("open", function() {
  db.dropDatabase(function(err, result) {});
  /**/
  adminMod.create({ mail: "femsa@mail.com", password: "Femsa123." }, function(
    err,
    doc
  ) {});
});

app.listen("8080", () => {
  console.log("server up");
});
