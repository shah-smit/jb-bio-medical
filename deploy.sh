git checkout gh-pages

git merge master

mvn build && mvn deploy

sleep 10

git checkout master