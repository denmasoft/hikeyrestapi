

module.exports = class {
  constructor(commitService) {
    this.commitService = commitService;
  }

  async find(owner, repo) {
    try {
      return await this.commitService.find(owner, repo);
    } catch (e) {
      throw e;
    }
  }

  async findAll() {
    try {
      const repos = await this.commitService.findAll();
      return repos;
    } catch (e) {
      throw e;
    }
  }
};
