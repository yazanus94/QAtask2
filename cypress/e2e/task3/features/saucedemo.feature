Feature: SauceDemo Automation

Scenario Outline: Login with multiple users
  Given I open SauceDemo website
  When I login with username "<username>" and password "secret_sauce"
  Then I should see the products page

Examples:
  | username                |
  | standard_user           |
  | problem_user            |
  | performance_glitch_user |

Scenario: Checkout Product
  Given I open SauceDemo website
  When I login with username "standard_user" and password "secret_sauce"
  And I add a product to the cart
  And I open the cart
  And I start checkout
  Then I should see checkout page

Scenario: Logout Successfully
  Given I open SauceDemo website
  When I login with username "standard_user" and password "secret_sauce"
  And I click the menu button
  And I click logout
  Then I should return to login page