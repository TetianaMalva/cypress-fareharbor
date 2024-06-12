import BasePage from '../BasePage'; //  BasePage is properly defined

export default class CookiesBannerPage extends BasePage {

  constructor() {
    super();
    this._banner =  '[aria-label="Cookie banner"]'; //  the banner has a attribute
    this._acceptBtn = '#onetrust-accept-btn-handler'; //  the accept button has a attribute
  }

  get banner() {
    return this._banner;
  }

  get acceptBtn() {
    return this._acceptBtn;
  }
}
