const path = require("path");
const { stdin, stdout, exit } = process;
const fs = require("fs");
const toFile = path.join(__dirname, "input.txt");

fs.writeFile(toFile, "", (error) => {
  error ? console.log(error.message) : null;
});

stdout.write("Write some text!");
const writeSrt = fs.createWriteStream(toFile);
stdin.on("data", (data) => {
  if (data.toString().trim() == "exit") {
    process.exit();
  } else {
    writeSrt.write(data.toString());
  }
});

process.on("SIGINT", () => {
  stdout.write("Bye!");
  exit();
});
