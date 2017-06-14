fs.readFile('./temp/output.json', 'utf8', function (err, data) {
     if (err) throw err;
     var obj = JSON.parse(data);
 });
