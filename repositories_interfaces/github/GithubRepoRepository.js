

module.exports = class {
  constructor(repoService) {
    this.repoService = repoService;
  }

  async find(owner, repo) {
    try {
      return await this.repoService.find(owner, repo);
    } catch (e) {
      throw e;
    }
  }

  async findAll() {
    try {
      const repos = await this.repoService.findAll();
      return repos;
    } catch (e) {
      throw e;
    }
  }
};
