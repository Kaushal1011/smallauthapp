const express = require("express");
const bodyparser = require("body-parser");
var cors = require("cors");
const app = express();
const port = 3000;
app.use(bodyparser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// simple auth function
app.post("/auth", (req, res) => {
  a = req.body;
  console.log(a);
  if (a.username === "kaushalpatil" && a.password === "kaushal1011") {
    res.status(200).json({ message: "authenticated" });
    console.log("accepted");
  } else {
    res.status(401).json({ message: "authentication failed" });
    console.log("failed");
  }
});
app.get("/auth", (req, res) => {
  res.send("Hmm Auth Page");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
