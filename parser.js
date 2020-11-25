const parseString = require("xml2js").parseString;
const fs = require('fs');

class Parser{
  parseXml(path, outputFolder, filename) {
    parseString(path, function (err, result) {
      if (err) {
        console.log(err);
	  }
	  fs.writeFileSync(`${outputFolder}/${filename}`, JSON.stringify(result))
    });
  }
};

module.exports = {
	Parser
}
