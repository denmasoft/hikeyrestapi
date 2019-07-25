

const Octokit = require('@octokit/rest');

class GithubService {
  constructor() {
    this.octokit = Octokit({
      userAgent: 'hikey v1.2.3',
      previews: ['jean-grey', 'symmetra'],
      baseUrl: 'https://api.github.com',
      log: {
        debug: () => {},
        info: () => {},
        // eslint-disable-next-line no-console
        warn: console.warn,
        // eslint-disable-next-line no-console
        error: console.error,
      },
      request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0,
      },
    });
  }
}
module.exports = GithubService;
