const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello backend",
  });
});

app.listen(3002, () => {
  console.log("app running on port " + 3002);
});
