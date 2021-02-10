const getRepos = require('./ex4.js');

describe('Using GitHub API', () => {
  it('Check repo name todo-list', async () => {
    const githubLink = 'https://api.github.com/orgs/tryber/repos';
    expect.assertions(2);
    const data = await getRepos(githubLink);
    expect(data).toContain('sd-01-week4-5-project-todo-list');
    expect(data).toContain('sd-01-week4-5-project-meme-generator');
  });
});