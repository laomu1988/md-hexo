var fs = require('fs');
var md = require('../index.js');
md(__dirname + '/');
var file = __dirname + '/test.md';

var md = fs.readFileSync(file, 'utf8');
if (md.indexOf('---') >= 0) {
  console.log('added sign:\n', md.substr(0, md.indexOf('\n---')));
  fs.writeFileSync(file, '# test mdhexo', 'utf8');
} else {
  console.error('cannot find ---');
}