#!/bin/bash
git checkout master
npm run predeploy
# Pass the commit message as the first argument
git add . && git commit -m "$0"
git subtree push --prefix dist origin gh-pages
git push origin master