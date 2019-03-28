const base = require('bizzy-nightwatch-base-page');
const { client } = require('nightwatch-cucumber');

const news = {
  elements: {
    newsItem: 'div.PageWrapper__ContentColumn-skooxj-2.jZploD > div:nth-child(1) > div > div',
    trendingStoryItem: 'div.indexweb__TColumn-sc-78tqc5-1.cbbcEU > div > a > div:nth-child(1) > div > span',
    sideBarMenu: '.NavSideweb__NavSideContainer-tanwma-0.hVAbee',
    menuHome: '.ListItemweb__Item-sc-1x1jqof-0.ezBswX.LabelLinkweb-g6i50g-0.ujMCf',
    storyTitle: 'div > div.View__StyledView-sc-1nce11s-0.guLykq > h1',
    commentSection: '.View__StyledView-sc-1nce11s-0.guLykq',
    txtComment: '.Helpersweb__CommentText-epifqe-0.iYtQOK',
    btnSendComment: '.Helpersweb__SubmitButton-epifqe-2.jofasG',
    commentItem: '.View__StyledView-sc-1nce11s-0.guLykq',
    commenterName: '.LabelLinkweb-g6i50g-0.cujMCf',
    commentContent: '.Helpersweb__CommentText-epifqe-0.iYtQOK'
  },
  commands: [{
    verifyPage() {
      return base.expectVisible(this, '@sideBarMenu');
    },
    verifyDetailNews() {
        return base.expectVisible(this, '@storyTitle') &&
            base.expectVisible(this, '@commentSection');
    },
    verifyComment() {
        return base.expectVisible(this, '@commenterName') &&
            base.expectVisible(this, '@commentContent');
    },
    openNews() {
        return base.clickElement(this, '@newsItem');
    },
    openTrending() {
        return base.clickElement(this, '@trendingStoryItem');
    },
    backToHome() {
        return base.clickElement(this, '@menuHome');
    },
    putComment(comment) {
        base.scrollToElement(this, '@commentSection');
        base.setValueElement(this, '@txtComment', comment);
    },
    clickSendComment() {
        return base.clickElement(this, '@btnSendComment');
    }
  }],
};
module.exports = news;
