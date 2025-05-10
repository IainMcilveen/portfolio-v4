#!/usr/bin/env sh
# abort on errors
set -e

# build
npm run generate

# navigate into the build output directory
cd .output/public

# commit build
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:IainMcilveen/portfolio-v4.git master:gh-pages
cd -