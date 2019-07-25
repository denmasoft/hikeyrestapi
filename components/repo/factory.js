const repoCtrl = require('../../controllers/repoCtrl');

const factory = {
  async checkRepoStability(data) {
    try {
      const repo = await repoCtrl.checkRepoStability(data);
      return repo;
    } catch (e) {
      throw e;
    }
  },
};
module.exports = factory;
