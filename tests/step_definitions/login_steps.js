const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

const browser = client.page.login_page();

Given(/^user is at kumparan home page/, () => browser.navigateToPage());

When(/^user confirm "([^"]*)" on notification$/, (key) => {
    return browser.confirmNotification(key);
});

When(/^user click button login FB at kumparan homepage$/, () => browser.clickLoginFB());

When(/^user click button login Google at kumparan homepage$/, () => browser.clickLoginGoogle());

Then(/^user will see kumparan home page$/, () => browser.verifyPage());

Then(/^user success login$/, () => browser.verifyPagePostLogin());

Then(/^user can see all element at homepage$/, () => browser.verifyHomepage());
