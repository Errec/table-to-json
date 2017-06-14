var meso = './src/meso_micro_mun.txt';

var tableToJson = function(inputTable, columnKey, columnValue) {
  var fs   = require('fs');
  var data = fs.readFileSync(inputTable, "latin1");

  var dataTable = _splitData(data);
  var tableObj  = _makeTableObj(dataTable, columnKey, columnValue);
  _writeJsonFile(tableObj);

  function _splitData(data) {
    return data
          .toString()
          .split(/\r?\n/)
          .map(function(line) { return line.split("\t"); })
          .filter(function(line){ return line[0] !== ''; });
  }

  function _makeTableObj(matrix, columnKey, columnValue) {
    return matrix.reduce(function (obj, currentArray) {
      var key = currentArray[columnKey], value = currentArray[columnValue];
      obj[key] = value;
      return obj;
    }, {});
  }

  function _writeJsonFile(obj) {
    var json = JSON.stringify(obj);
    fs.writeFile('./temp/output.json', json, 'utf8');
  }
};

tableToJson(meso, 2, 0);
