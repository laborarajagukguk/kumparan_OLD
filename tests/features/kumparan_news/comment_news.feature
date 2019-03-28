Feature: As a User, I can input comment at news

Background: Go to homepage and Login
Given user is at kumparan home page

@happy @comment @kumparan
Scenario: Input Comment
When user click button login Google at kumparan homepage
    And user click trending at kumparan home page
    And user input comment "My Comment" at news page 
    And user click button send comment at news page
Then user can read comments at news page
 