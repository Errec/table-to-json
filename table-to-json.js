var meso = './src/meso_micro_mun.txt';

var tableToJson = function(inputTable, columnKey, columnValue) {
  var fs = require('fs');
  var data = fs.readFileSync(inputTable, "latin1");
  var dataTable = _splitData(data).filter(function(n){return n[0] !== '';});
  var tableObj = _makeTableObj(dataTable, columnKey, columnValue);

  _writeJson(tableObj);

  function _splitData(data) {
    var dataText = data.toString().split(/\r?\n/);
    return dataText.map(function(line) {
      return line.split("\t");
    });
  }

  function _makeTableObj(matrix, columnKey, columnValue) {
    return matrix.reduce(function (obj, currentArray) {
        var key = currentArray[columnKey], value = currentArray[columnValue];
        obj[key] = value;
        return obj;
    }, {});
  }

  function _writeJson(obj) {
    var json = JSON.stringify(obj);
    fs.writeFile('./temp/output.json', json, 'utf8');
  }
};

tableToJson(meso, 2, 0);
