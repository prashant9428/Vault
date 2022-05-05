#!/bin/bash


# get repo name and owner
REPO_REMOTE=$(git config --get remote.origin.url)

if [ -z $REPO_REMOTE ]; then
	echo "Not a git repository"
	exit 1

REPO_NAME=$(basename -s .git $REPO_REMOTE)
REPO_OWNER=$(git config --get user.name)

for item in $(lerna changed  --ndjson)
  do
    location=$(echo $item | grep -o '"location":"[^"]*' | grep -o '[^"]*$')
    echo "${location}"
    cd "${location}"
  #   sls deploy -s dev
  done