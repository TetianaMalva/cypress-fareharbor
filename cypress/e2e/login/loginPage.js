import BasePage from '../BasePage'; //  BasePage is properly defined

export default class LoginPage extends BasePage {
  
  constructor() {
    super();
    this._name = '[placeholder="shortname"]'; //  the input field has placeholder="shortname"
  }

  get name() {
    return this._name;
  }

}
