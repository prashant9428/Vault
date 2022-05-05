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

  VERSION="v6.6.7"
  DRAFT="false"
  PRE="true"
  BRANCH="development"
  GITHUB_ACCESS_TOKEN="token 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"
  GENERATE_RELEASE_NOTES:"true"
  REPO_OWNER="prashant9428"
  REPO_NAME="LENRA_PACKAGE"

  API_JSON=$(printf '{"tag_name": "%s","target_commitish": "%s","name": "%s","draft": %s,"prerelease": %s, "generate_release_notes": %s}' "$NODE_VERSION" "$BRANCH" "$NODE_VERSION"  "$DRAFT" "$PRE" "$GENERATE_RELEASE_NOTES")
  API_RESPONSE_STATUS=$(curl --data "$API_JSON" --header 'Accept: application/vnd.github.v3+json' --header 'Authorization: token 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'  -s -i https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/releases)
  echo "$API_RESPONSE_STATUS"
done

echo "---running sh stopped----"