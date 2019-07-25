const RepoRepository = require('./RepoRepository');

const CommitRepository = require('./CommitRepository');

const RepoService = require('../services/github/RepoService');

const CommitService = require('../services/github/CommitService');

const GithubRepoRepository = require('../repositories_interfaces/github/GithubRepoRepository');

const githubRepoRepository = new GithubRepoRepository(new RepoService());

const GithubCommitRepository = require('../repositories_interfaces/github/GithubCommitRepository');

const githubCommitRepository = new GithubCommitRepository(new CommitService());

const repoRepository = new RepoRepository(githubRepoRepository);

const commitRepository = new CommitRepository(githubCommitRepository);

module.exports = { repoRepository, commitRepository };
