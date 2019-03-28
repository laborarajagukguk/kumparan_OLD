const { client } = require('nightwatch-cucumber');
const { Then, When } = require('cucumber');

const browser = client.page.news_page();

When(/^user click news at kumparan home page$/, () => browser.openNews());

When(/^user click trending at kumparan home page$/, () => browser.openTrending());

When(/^user input comment "([^"]*)" at news page$/, (key) => {
    return browser.putComment(key);
});

When(/^user click button send comment at news page$/, () => browser.clickSendComment());

When(/^user click button home at news page$/, () => browser.backToHome());

Then(/^user can read news at news page$/, () => browser.verifyDetailNews());

Then(/^user can read comments at news page$/, () => browser.verifyComment());

Then(/^user verify news at home page$/, () => browser.verifyPage());