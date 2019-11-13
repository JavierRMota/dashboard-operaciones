const express = require("express");
const companiaR = require("./routes/compania");
const companiaM = require("./models/compania");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db_url = "mongodb://localhost/dbCompanias";
mongoose.connect(db_url, { userNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
app.use("/", companiaR);
db.on("error", console.error.bind(console, "Error en la conexión"));
db.once("open", function() {
  db.dropDatabase(function(err, result) {});
  /**/
  companiaM.create(
    { nombre: "FEMSA", mail: "femsa@mail.com", password: "Femsa123." },
    function(err, doc) {}
  );
});

app.listen("8080", () => {
  console.log("server up");
});
