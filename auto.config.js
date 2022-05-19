module.exports = {
  
  "changelog": {  
    "message": "string"
  },
  "shipit": {
    "prerelease": true,
    "message": "string",
    "noChangelog": false,
    "onlyGraduateWithReleaseLabel": true
  },
  "release":{
    "prereleaseBranches": ["development"],
    "prerelease": true,
    "base-branch": "main"
  }
}