const { Transform } = require("stream");
const fs = require("fs");

const transform = new Transform({
  decodeStrings: true,
  objectMode: false,
  transform(chunk, encoding, next) {
    const string = chunk.toString("utf8");
    this.push(string.toUpperCase());
    next();
  },
});

const readable = fs.createReadStream("lorem.txt", {
  encoding: "utf-8",
  highWaterMark: 128 * 1024,
});
const writable = fs.createWriteStream("output.txt");

readable.pipe(transform).pipe(writable);
