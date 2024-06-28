const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/email", (req, res) => {
  // console.log("Parth24@gmail.com");
  res.send("Parth24@gmail.com");
});
app.get("/fullName", (req, res) => {
  // console.log("Parth24@gmail.com");
  res.send("Parth Shrivastava");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
