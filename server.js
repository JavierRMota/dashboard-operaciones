const express = require("express");
const compania = require("./routes/compania");
var app = express();

const mongoose = require("mongoose");
const db_url = "mongodb://localhost/dbCompania";
mongoose.connect(db_url, { userNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Error en la conexión"));
db.on("open", function() {
  db.dropDatabase(function(err, result) {
    done();
  });
});

app.use(express.json());
app.use("/companias", compania);
app.listen("8080", () => {
  console.log("server up");
});
