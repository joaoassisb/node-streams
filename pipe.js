const fs = require("fs");

const writable = fs.createWriteStream("test.txt");
const readable = fs.createReadStream("lorem.txt");

readable.pipe(writable);

readable.on("data", function (chunk) {
  console.log("lendo um pedaço");
});
