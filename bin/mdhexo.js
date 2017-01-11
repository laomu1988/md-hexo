#!/usr/bin/env node

var mk = require('../index.js');
var path = require('path');
var folder = process.cwd() + '/';
if (process.argv.length > 2) {
  folder +=  process.argv[2] + '/';
}
console.log('folder: ', folder);
mk(folder);