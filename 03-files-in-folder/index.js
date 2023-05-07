const fs = require("fs");
const path = require("path");

fs.readdir(
  path.join(__dirname, "./secret-folder"),
  { withFileTypes: true },
  (error, files) => {
    if (error) console.log(error.message);
    else {
      console.log("Folder contents:");
      files.forEach((f) => {
        if (f.isFile()) {
          fs.stat(
            path.join(__dirname, "./secret-folder/", f.name),
            (error, data) => {
              if (error) throw error;
              let item = data.size;
              let nameOfFile = path.parse(
                path.join(__dirname, `./secret-folder/${f.name}`)
              ).name;
              console.log(
                `${nameOfFile} - ${path.extname(f.name)} - ${item} b`
              );
            }
          );
        }
      });
    }
  }
);
