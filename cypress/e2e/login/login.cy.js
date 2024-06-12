import LoginPage from './loginPage'; //  LoginPage exports a class
import LandingPage from '../landingPage/landingPage'; //  LandingPage exports a class
import CookiesBannerPage from '../cookiesBanner/cookiesBannerPage'; //  CookiesBannerPage exports a class

describe('Login Page', () => {
  let loginPage;
  let landingPage;
  let cookiesBannerPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    landingPage = new LandingPage();
    cookiesBannerPage = new CookiesBannerPage();
    
    cy.visit('/');
    acceptCookies();
  });

  it('Login page should have required elements', () => {
    landingPage.clickLogin();
    cy.get(loginPage.name).should('be.visible');
  });

  afterEach(() => {
    loginPage.close();
  });

  async function acceptCookies() {
    cy.get(cookiesBannerPage.banner).should('be.visible');
    cy.get(cookiesBannerPage.acceptBtn).click();
    cy.get(cookiesBannerPage.banner).should('not.be.visible');
  }
});
