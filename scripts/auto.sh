# yarn --silent auto changelog
# git add -A
# git commit -m "chore(release): $VERSION [skip ci]"
# npm version $VERSION -m "chore(release): %s [skip ci]"
# git push *** HEAD:main --tags
# VERSION_NO=`node -pe "require('./package.json').version"`
auto release --use-version $VERSION_NO