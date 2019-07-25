
module.exports = class {
  constructor(repository) {
    this.repository = repository;
  }

  find(owner, repo) {
    return this.repository.find(owner, repo);
  }

  findAll() {
    return this.repository.findAll();
  }
};
