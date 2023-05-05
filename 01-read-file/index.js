const path = require("path");
const { stdout } = process;
const fs = require("fs");

const toFile = path.join(__dirname, "text.txt");
const readStream = fs.createReadStream(toFile, "utf-8");
readStream.on("data", (data) => stdout.write(data));
