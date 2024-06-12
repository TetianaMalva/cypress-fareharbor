import CookiesBannerPage from './cookiesBannerPage'; //  cookiesBannerPage exports a class

describe('Accept Cookies', () => {
  let cookiesBannerPage;

  beforeEach(() => {
    cookiesBannerPage = new CookiesBannerPage();
    cy.visit('/');
  });

  it('Verify cookies panel is not visible after accepting', () => {
    cy.get(cookiesBannerPage.banner).should('be.visible');
    cy.get(cookiesBannerPage.acceptBtn).click();
    cy.get(cookiesBannerPage.banner).should('not.be.visible');
  });

  afterEach(() => {
    cookiesBannerPage.close();
  });
});
