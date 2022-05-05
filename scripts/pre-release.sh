# get repo name and owner
REPO_REMOTE=$(git config --get remote.origin.url)

if [ -z $REPO_REMOTE ]; then
    echo "Not a git repository"
    exit 1
fi

#Get the repo name and owner name
REPO_NAME=$(basename -s .git $REPO_REMOTE)
REPO_OWNER=$(git config --get user.name)

echo $REPO_NAME
echo $REPO_OWNER

# Get the changed folder array
PACKAGE_CHANGE=$(lerna changed  --ndjson)
echo $PACKAGE_CHANGE



echo "Package : Publishing"
npx lerna version --conventional-commits --conventional-prerelease --preid beta --yes --force-git-tag
echo "---running sh started----"

for item in $PACKAGE_CHANGE
do
  location=$(echo $item | grep -o '"location":"[^"]*' | grep -o '[^"]*$')
  echo "${location}"
  cd "${location}"
  NODE_VERSION=$(node -p -e "require('./package.json').version")
  echo $NODE_VERSION
#   sls deploy -s dev
done

echo "---running sh stopped----"