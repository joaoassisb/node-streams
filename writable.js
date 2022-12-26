"use strict";

const fs = require("fs");

const writable = fs.createWriteStream("output.txt");

writable.write("Hello world !");
