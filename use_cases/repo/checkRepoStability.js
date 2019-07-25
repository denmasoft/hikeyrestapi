
const moment = require('moment');
const GetRepo = require('./getRepo');
const ListCommits = require('./listCommits');
const RepoModel = require('../../models/repo');

module.exports = async (owner, repo, { repoRepository, commitRepository }) => {
  try {
    const repoResponse = await GetRepo(owner, repo, { repoRepository });
    const commitsResponse = await ListCommits(owner, repo, { commitRepository });
    const latestCommit = commitsResponse.data[0];
    const latestCommitDate = moment(latestCommit.commit.committer.date);
    const rating = repoResponse.data.open_issues * 10 + Math.abs(latestCommitDate.diff(moment(), 'days'));
    return new RepoModel(owner, repo, rating);
  } catch (error) {
    throw error;
  }
};
