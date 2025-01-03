const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello backend",
    name: "marion",
    age:45
  });
});

app.listen(3002, () => {
  console.log("app running on port " + 3002);
});
