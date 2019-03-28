Feature: As a User, I can Login with Facebook Account

@happy @login @kumparan
Scenario: Login with facebook account 
  Given user is at kumparan home page
  When user click button login FB at kumparan homepage
  Then user success login
  