Feature: As a User, I can see news

Background: Go to homepage
Given user is at kumparan home page

@happy @news @kumparan
Scenario: Open News from Trending
When user click trending at kumparan home page
Then user can read news at news page