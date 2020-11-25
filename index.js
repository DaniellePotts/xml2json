const fs = require("fs");
const path = require("path");

const Parser = require("./parser").Parser;
const parser = new Parser();
try {
  if (process.argv.slice(2)[0] != null && process.argv.slice(2)[1] != null) {
    let inputFolder = process.argv.slice(2)[0];
    const outputFolder = process.argv.slice(2)[1];

    if (fs.existsSync(inputFolder)) {
      if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
      }

      console.log(`Getting files from folder ${inputFolder}`);
      const files = fs.readdirSync(inputFolder);
      console.log(
        `Got files from folder ${inputFolder}. Filtering out non XML files`
      );

      let xmlFiles = [];

      files.forEach((file) => {
        if (path.extname(`${inputFolder}/${file}`).toLowerCase() === ".xml") {
          xmlFiles.push(file);
        }
      });

      if (xmlFiles.length > 0) {
        console.log(`=======Parsing Files=======`);
        xmlFiles.forEach((file, index) => {
          console.log(`Parsing file ${(index + 1)}/${xmlFiles.length}`);
          parser.parseXml(
            fs.readFileSync(`${inputFolder}/${file}`),
            outputFolder,
            `${file.split(".")[0]}.json`
          );
        });

        console.log(`=======Successfully parsed all files=======`);

        console.log(`Files were exported to ${outputFolder}`);
      } else {
        console.log(
          `No XML files were found in the input folder ${inputFolder}`
        );
      }
    } else {
      console.log(`The provided input folder does not exist.`);
    }
  } else {
    console.log(`No input or output folders were provided.`);
  }
} catch (err) {
  console.log(`Error occurred during parsing: ${err}`);
}
