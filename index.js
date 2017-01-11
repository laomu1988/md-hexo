var fs = require('fs');
var filter = require('filter-files');
var path = require('path');
var time = require('timeformatter')('zh');
var main_place = process.cwd() + '/';

function mdhexo(filepath) {
  if (path.extname(filepath) !== '.md') return;
  console.log('found:', filepath);
  var source = fs.readFileSync(filepath, 'utf8');
  // 判断是否存在---标志
  var place = source.indexOf('---', source.indexOf('\n') + 1);
  var before = source.substr(0, place);
  if (place > 0 && before.indexOf('title:') >= 0) return;
  var relative = path.relative(main_place, filepath);
  var parse = path.parse(relative);
  var filename = parse.name;
  var tags = parse.dir.split('/');
  tags = tags.length > 1 ? JSON.stringify(tags).replace(/"/g, '') : tags.join('');
  var lstatSync = fs.lstatSync(filepath);
  var t = time.format(lstatSync.birthtime, 'yyyy-LL-dd HH:mm:ss');
  var added = 'title: ' + filename + '\n' + 'tags: ' + tags + '\ndate: ' + t + '\n---\n\n';
  console.log('[hexo_sign] title:', filename, '   tags:', tags);
  fs.writeFileSync(filepath, added + source, 'utf8');
}


module.exports = function (folder) {
  var files = filter.sync(folder, null, function (file) {
    console.log(file);
    return path.extname(file) === '.md';
  });
  if (!files || files.length == 0) return;
  for (var i = 0; i < files.length; i++) {
    mdhexo(files[i]);
  }
};
