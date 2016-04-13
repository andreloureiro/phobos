git checkout gh-pages
git rebase master
boot build
cp -R target/main.js target/index.html target/css target/img .
git add .
git commit -m "Update demo page"
git push origin gh-pages
git checkout master

