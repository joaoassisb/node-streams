"use strict";

const fs = require("fs");

const readableStream = fs.createReadStream("lorem.txt", {
  highWaterMark: 128 * 1024,
});

readableStream.on("data", function (chunk) {
  console.log("Lendo", chunk);
});

readableStream.on("end", function () {
  console.log("Leitura finalizada");
});
