module.exports = {
    "release": {
        "monorepo": {
          "analyzeCommits": {
            "format": "atom"
          },
          "generateNotes": "myNotesGenerator"
        },
        "prepare": ["@semantic-release/npm", "@semantic-release/git"],
        "verifyConditions": ["@semantic-release/git"]
      }
}