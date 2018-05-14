import { AffinityClientPage } from './app.po';

describe('affinity-client App', () => {
  let page: AffinityClientPage;

  beforeEach(() => {
    page = new AffinityClientPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
