const express = require("express");

const app = express();
const PORT = 9000;

app.get("/", (req, res, next) => {
  const fs = require("fs");

  res.setHeader("content-type", "text/txt; charset=utf-8");
  res.setHeader("content-disposition", `attachment; filename=lorem.txt`);

  const readable = fs.createReadStream("lorem.txt");
  readable.pipe(res);
});

app.listen(PORT, () => {
  console.info("Server listening on port", PORT);
});
