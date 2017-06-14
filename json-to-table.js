var myJson = './temp/output.json';

var jasonToTable = function (inputJson) {
  var fs = require('fs');

  var tableObj = _readJsonFile(inputJson);

  function _readJsonFile(inputJson) {
    return JSON.parse(fs.readFileSync(inputJson, 'utf8'));
  }
};

jasonToTable(myJson);
