var meso = './src/meso_micro_mun.txt';

var tableToJson = function(inputTable) {
  var fs = require('fs');
  var data = fs.readFileSync(inputTable, "latin1");
  var dataTable = _splitData(data);

  function _splitData(data) {
    var dataText = data.toString().split(/\r?\n/);
    return dataText.map(function(line) {
      return line.split("\t");
    });
  }
};

tableToJson(meso);
