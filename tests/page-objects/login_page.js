const base = require('bizzy-nightwatch-base-page');
const { client } = require('nightwatch-cucumber');

const login = {
  url() {
    const url = base.setURL(process.env.BASE_URL);
    return url;
  },
  elements: {
    txtEmailFB: '.inputtext._55r1 inputtext._1kbt.inputtext._1kbt',
    txtPassFB: '#pass',
    txtEmailGoogle: '#identifierId',
    txtPassGoogle: '#password',
    sidebarMenu: '.NavSideweb__NavSideContainer-tanwma-0.hVAbee',
    txtsearchBar: '.FormControlweb__FormControlWrapper-sc-5bcrdi-0-input',
    notifIcon: 'div.indexweb__TColumn-sc-78tqc5-1.eoJQnQ > div:nth-child(2) > div > div > button > span > div > span > span > div > div',
    accountIcon: 'div.indexweb__TColumn-sc-78tqc5-1.eoJQnQ > div:nth-child(3) > div > button > span > div > span > span > div > div > img',

    btnCreateStory: 'div.indexweb__TColumn-sc-78tqc5-1.eoJQnQ > div:nth-child(1) > div > button > span > span',
    btnGoogleNext: '.RveJvd.snByac',
    btnLoginFB: '.Buttonweb__ButtonWrapper-sc-1tj31rk-0.bjUJrp',
    btnLogin: '#loginbutton',
    btnLoginGoogle: 'div.indexweb__SocialLogoContainer-hk3bgd-3.kyiToU > div:nth-child(2) > button > span > span > span',
    btnNotifYes: '.align-right.primary.popover-button',
    btnNotifNo: '.align-right.secondary.popover-button'
  },
  commands: [{
    navigateToPage() {
      this.navigate();
      base.maxWindow(this.api);
      client.acceptAlert();
      // this.api.refresh();
    },
    verifyPage() {
      return base.expectVisible(this, '@btnLoginFB') &&
            base.expectVisible(this, '@btnLoginGoogle');
    },
    verifyHomepage(){
      base.expectPresent(this, '@sidebarMenu');
      base.expectPresent(this, '@txtsearchBar');
      base.expectPresent(this, '@notifIcon');
      base.expectPresent(this, '@accountIcon');
      base.expectPresent(this, '@btnCreateStory');
    },
    confirmNotification(key) {
      switch (key) {
        case 'YES':
          return base.clickElement(this, '@btnNotifYes');
        case 'NO':
        return base.clickElement(this, '@btnNotifNo');
        default:
          break;
      }
    },
    clickLoginFB() {
      base.clickElement(this, '@btnLoginFB');
      base.setValueElement(this, '@txtEmailFB', process.env.USER_LOGINFB);
      base.setValueElement(this, '@txtPassFB', process.env.USERPASSFB);
      base.clickElement(this, '@btnLogin');
    },
    clickLoginGoogle() {
      base.clickElement(this, '@btnLoginGoogle');
      base.setValueElement(this, '@txtEmailGoogle', process.env.USER_LOGINGOOGLE);
      base.setValueElementThenEnter(this, '@txtPassGoogle', process.env.USERPASSGOOGLE, client);
    },
    verifyPagePostLogin() {
      return base.assertElementNotPresent(client, '@btnLoginFB') &&
      base.assertElementNotPresent(client, '@btnLoginGoogle');
    },

  }],
};
module.exports = login;
