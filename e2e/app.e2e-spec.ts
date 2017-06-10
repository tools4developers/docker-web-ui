import { DockerWebUiPage } from './app.po';

describe('docker-web-ui App', () => {
  let page: DockerWebUiPage;

  beforeEach(() => {
    page = new DockerWebUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
