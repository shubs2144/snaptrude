Feature: User Authentication tests

  Background: 
    

  Scenario: Login should be success
    Given User navigates to the application
    And User enter the username as "interviewshubham@snaptrude.com"
    And User enter the password as "Interviewshubhampatil1!"
    When User click on the login button
    Then Login should be success
