const { Transform } = require("stream");
const fs = require("fs");

const transform = new Transform({
  transform(chunk, encoding, next) {
    console.log(chunk);
    this.push("teste");
    next();
  },
});

const readable = fs.createReadStream("lorem.txt");
const writable = fs.createWriteStream("output.txt");

readable.pipe(transform).pipe(writable);
