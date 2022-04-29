module.exports = {
    "release": {
        "monorepo": {
          "analyzeCommits": {
            "format": "atom"
          },
          "generateNotes": "myNotesGenerator"
        },
        "prepare": ["@semantic-release/npm", "@semantic-release/git",'@semantic-release/commit-analyzer'],
        "verifyConditions": ["@semantic-release/git"]
      }
}