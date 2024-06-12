export default class BasePage {
  navigate(path) {
      cy.visit(path);
  }

  
  close() {
      
  }
}
