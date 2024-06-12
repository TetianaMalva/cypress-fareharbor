import LandingPage from './landingPage'; // Assuming landingPage exports a class

describe('Landing Page', () => {
  let landingPage;

  beforeEach(() => {
    landingPage = new LandingPage();
    landingPage.navigate("/");
  });

  it('Should display correct page title', () => {
    landingPage.getTitle().then(title => {
      expect(title).to.contain('FareHarbor');
    });
  });

});
