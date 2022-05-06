 git config user.name "${{ secrets.GH_ADMIN_USERNAME }}"
 git config user.email "${{ secrets.GH_ADMIN_EMAIL }}"
 git remote set-url origin https://${{secrets.GH_ADMIN_USERNAME}}:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY

PACKAGE_CHANGE=$(lerna changed  --ndjson)
echo $PACKAGE_CHANGE

npx lerna version --conventional-commits --conventional-graduate --yes --force-git-tag
echo "---running sh started----"

BODY=""

array=(${{join(github.event.commits.*.message, ' ') }})
for i in "${array[@]}"
 do
    echo "value: ${i}"
    BODY="${BODY} \n*"
done

echo "Release Body ${BODY}"

for item in $PACKAGE_CHANGE
  do
    location=$(echo $item | grep -o '"location":"[^"]*' | grep -o '[^"]*$')
    echo "${location}"
    cd "${location}"
    PACKAGE_NAME=$(node -p -e "require('./package.json').name")
    VERSION=$(node -p -e "require('./package.json').version")
    NODE_VERSION="${PACKAGE_NAME}@${VERSION}"
          #   sls deploy -s dev

    DRAFT="false"
    PRE="false"
    BRANCH="main"
    GENERATE_RELEASE_NOTES="false"
    REPO_OWNER="prashant9428"
    REPO_NAME="LENRA_PACKAGE"

    API_JSON=$(printf '{"tag_name": "%s","target_commitish": "%s","name": "%s","draft": %s,"prerelease": %s, "generate_release_notes": %s, "body": %s}' "$NODE_VERSION" "$BRANCH" "$NODE_VERSION"  "$DRAFT" "$PRE" "$GENERATE_RELEASE_NOTES" "$BODY")
    API_RESPONSE_STATUS=$(curl --data "$API_JSON" --header 'Accept: application/vnd.github.v3+json' --header 'Authorization: token ${{ secret.GH_ADMIN_TOKEN }}'  -s -i https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/releases)
    echo "$API_RESPONSE_STATUS"
  done

echo "---running sh stopped----"