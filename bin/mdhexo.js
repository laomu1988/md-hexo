var mk = require('../index.js');
var path = require('path');
var folder = path.dirname(require.main.filename);
if (process.argv.length > 1) {
  folder += '/' + process.argv[1];
}
console.log('folder: ', folder);
mk(folder);