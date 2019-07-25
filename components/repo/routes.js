const middleware = require('./middleware');

module.exports = (router) => {
  router.post('/repos/stability', middleware.checkRepoStability);
};
