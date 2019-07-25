
const CheckRepoStability = require('../use_cases/repo/checkRepoStability');

const { repoRepository, commitRepository } = require('../repositories');

module.exports = {
  async checkRepoStability(data) {
    const { owner, repo } = data;
    let response;
    try {
      response = await CheckRepoStability(owner, repo, { repoRepository, commitRepository });
      return response;
    } catch (e) {
      throw e;
    }
  },
};
