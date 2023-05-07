const fs = require("fs");
const path = require("path");

fs.readdir(
  path.join(__dirname, "files"),
  { withFileTypes: true },
  (error, files) => {
    if (error) console.log(error.message);
    fs.mkdir(
      path.join(__dirname, "files-copy"),
      { recursive: true, force: true },
      (error) => {
        if (error) console.log(error.message);
        files.forEach((f) => {
          fs.copyFile(
            path.join(__dirname, "files", f.name),
            path.join(__dirname, "files-copy", f.name),
            (error) => {
              if (error) console.log(error.message);
            }
          );
        });
      }
    );
  }
);
