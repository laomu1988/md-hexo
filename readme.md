
# marddown files add title and sign, use for hexo


## install
```
$ npm install -g md-hexo
```

## usage
run `mdhexo` in your project folder, and then the markdown files without sign `---` will add sign:
```
---
title: filename
tags: folder
date: 2017-01-01 10:10:10
---
```

## bin
```
$ mdhexo [folder]
```

## todo
* [x] add date sign from birthtime of file
* [x] 忽略node_modules目录
* [ ] 根据markdown内容中的#查找title
* [ ] 补充缺失的sign
