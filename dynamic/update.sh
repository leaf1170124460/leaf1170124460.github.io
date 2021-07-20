#! /bin/bash

git add .
git commit -m "更新模拟动态化包 $1"
git push

md5 $1