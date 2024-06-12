import BasePage from '../BasePage'; //  BasePage is properly defined

export default class LandingPage extends BasePage {
  
  // Define login link selector
  loginLink = 'a.button.button-secondary.button-login.hide-when-nav-open:contains("Log in")'; 
  // Method to get page title
  async getTitle() {
    return cy.title();
  }

  // Method to click on the login link
  async clickLogin() {
    cy.get(this.loginLink).click();
  }

}
