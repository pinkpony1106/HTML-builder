const fs = require("fs");
const path = require("path");
const writeStream = fs.createWriteStream(
  path.join(__dirname, "/project-dist", "bundle.css"),
  (error) => {
    if (error) {
      return console.error(error);
    }
  }
);
async function bundleOfCss() {
  try {
    const files = await fs.promises.readdir(path.join(__dirname, "styles"));
    files.forEach((f) => {
      if (path.extname(f) === ".css") {
        const readStream = fs.createReadStream(
          path.join(__dirname, "styles", f)
        );
        readStream.on("data", (chunk) => {
          writeStream.write(chunk);
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
}
bundleOfCss();
