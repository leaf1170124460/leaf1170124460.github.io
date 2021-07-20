#! /bin/bash

var filename = $1

git add .
git commit -m "更新模拟动态化包 $filename"
git push

md5 filename