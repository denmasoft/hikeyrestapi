const factory = require('./factory');
const Response = require('../../Response');

const middleware = {
  async checkRepoStability(req, res) {
    try {
      const data = await factory.checkRepoStability(req.body);
      res.status(200).json(new Response(200, 200, data, 'successfull'));
    } catch (error) {
      res.status(error.status).json(new Response(error.status, error.status,
        {}, error.headers.status));
    }
  },
};

module.exports = middleware;
