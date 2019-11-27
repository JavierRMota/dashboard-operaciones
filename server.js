const express = require("express");
const adminPosts = require("./routes/adminPosts");
const adminGets = require("./routes/adminGets");
const adminMod = require("./models/admin");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var app = express();
var cors = require("cors");

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    arrayLimit: 5000
  })
);
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

app.use("/api/compania", adminPosts);
app.use("/api/compania", adminGets);
db.on("error", console.error.bind(console, "Error en la conexión"));
db.once("open", function() {
  db.dropDatabase(function(err, result) {});
  /**/
  adminMod.create(
    {
      mail: "a",
      password: "a",
      companias: [{ nombre: "nem" }, { nombre: "Facebook" }]
    },
    function(err, doc) {}
  );
});

app.listen("8080", () => {
  console.log("server up");
});
