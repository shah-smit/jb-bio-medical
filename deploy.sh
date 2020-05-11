git checkout gh-pages

git merge master

npm run build && npm run deploy

sleep 10

git checkout master