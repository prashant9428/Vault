# get repo name and owner
REPO_REMOTE=$(git config --get remote.origin.url)

if [ -z $REPO_REMOTE ]; then
    echo "Not a git repository"
    exit 1
fi

REPO_NAME=$(basename -s .git $REPO_REMOTE)
REPO_OWNER=$(git config --get user.name)

echo $REPO_NAME
echo $REPO_OWNER

for item in $(lerna changed  --ndjson)
do
  location=$(echo $item | grep -o '"location":"[^"]*' | grep -o '[^"]*$')
  echo "${location}"
  cd "${location}"
  NODE_VERSION=$(node -p -e "require('./package.json').version")
  echo $NODE_VERSION
#   sls deploy -s dev
done