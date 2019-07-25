

const GithubService = require('./GithubService');

class CommitService extends GithubService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async find(owner, repo) {
    try {
      const response = await this.octokit.repos.listCommits({ owner, repo });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.octokit.repos.listForUser({ });
    } catch (error) {
      throw error;
    }
  }
}
module.exports = CommitService;
