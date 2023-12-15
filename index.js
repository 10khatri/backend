require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello abhijit");
});
app.get("/login", (req, res) => {
  res.send("<h1>login Karo</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
