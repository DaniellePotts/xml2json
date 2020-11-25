const fs = require("fs");
const path = require("path");

const Parser = require("./parser").Parser;
const parser = new Parser();

if (process.argv.slice(2)[0] != null && process.argv.slice(2)[1] != null) {
  let inputFolder = process.argv.slice(2)[0];
  const outputFolder = process.argv.slice(2)[1];

  if (fs.existsSync(inputFolder)) {
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder);
    }

    const files = fs.readdirSync(inputFolder);

    let xmlFiles = [];

    files.forEach((file) => {
      if (path.extname(`${inputFolder}/${file}`).toLowerCase() === ".xml") {
        xmlFiles.push(file);
      }
    });

    xmlFiles.forEach((file) => {
      parser.parseXml(
        fs.readFileSync(`${inputFolder}/${file}`),
        outputFolder,
        `${file.split(".")[0]}.json`
      );
    });
  } else {
    console.log(`The provided input folder does not exist.`);
  }
} else {
  console.log(`No input or output folders were provided.`);
}
