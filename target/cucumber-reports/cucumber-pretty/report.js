$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RetailPageLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Retail Page Login testing features",
  "description": "",
  "id": "retail-page-login-testing-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RetailPageLoginTest"
    }
  ]
});
formatter.before({
  "duration": 5428753155,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sabour.azadani@gmail.com\u0027 and password \u0027FakePass123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2972059620,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 142072632,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3836232060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sabour.azadani@gmail.com",
      "offset": 21
    },
    {
      "val": "FakePass123",
      "offset": 61
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 812588232,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 420873548,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3454067730,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Register as an Affiliate userwith Cheque Payment Method",
  "description": "",
  "id": "retail-page-login-testing-features;register-as-an-affiliate-userwith-cheque-payment-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User click on‘Register for an Affiliate Account’link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User fill affiliate form with below information",
  "rows": [
    {
      "cells": [
        "company",
        "website",
        "taxID",
        "paymentMethod"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User check on About us check box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Register_for_an_Affiliate_Account_link()"
});
formatter.result({
  "duration": 325963140,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_fill_affiliate_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 1219744456,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_check_on_About_us_check_box()"
});
formatter.result({
  "duration": 483716739,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_Continue_button()"
});
formatter.result({
  "duration": 462791006,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_see_a_success_message()"
});
formatter.result({
  "duration": 552300610,
  "status": "passed"
});
formatter.after({
  "duration": 479367690,
  "status": "passed"
});
formatter.before({
  "duration": 2662558048,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sabour.azadani@gmail.com\u0027 and password \u0027FakePass123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2467278078,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 84570502,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3857911581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sabour.azadani@gmail.com",
      "offset": 21
    },
    {
      "val": "FakePass123",
      "offset": 61
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 961845767,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 436808412,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3479571752,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Edit your affiliate information from Cheque payment method to Bank Transfer",
  "description": "",
  "id": "retail-page-login-testing-features;edit-your-affiliate-information-from-cheque-payment-method-to-bank-transfer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User click on‘Edit your affiliate informationlink",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user click on Bank Transfer radio button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User fill Bank information with below information",
  "rows": [
    {
      "cells": [
        "bankName",
        "abaNumber",
        "swiftCode",
        "accountName",
        "accountNumber"
      ],
      "line": 24
    },
    {
      "cells": [
        "Afghanistan Bank",
        "123456789",
        "9876543210",
        "SabourAzadani",
        "1234598760"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click on Continue AffiliateButton",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Edit_your_affiliate_informationlink()"
});
formatter.result({
  "duration": 295742845,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Bank_Transfer_radio_button()"
});
formatter.result({
  "duration": 106815550,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_fill_Bank_information_with_below_information(DataTable)"
});
formatter.result({
  "duration": 606996619,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_continue_affiliatebutton()"
});
formatter.result({
  "duration": 409173305,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_see_a_success_message()"
});
formatter.result({
  "duration": 557891534,
  "status": "passed"
});
formatter.after({
  "duration": 242284418,
  "status": "passed"
});
formatter.before({
  "duration": 2168531595,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter username \u0027sabour.azadani@gmail.com\u0027 and password \u0027FakePass123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2262236565,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 61266698,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3837701573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sabour.azadani@gmail.com",
      "offset": 21
    },
    {
      "val": "FakePass123",
      "offset": 61
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 846867656,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 452478880,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3459445856,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Edit your account Information",
  "description": "",
  "id": "retail-page-login-testing-features;edit-your-account-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User click on‘Edit your account information’ link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User modify below information",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastName",
        "email",
        "telephone"
      ],
      "line": 32
    },
    {
      "cells": [
        "Sabour",
        "Azadani",
        "sabour.azadani@gmail.com",
        "4804322878"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User should seea message ‘Success: Your account has been successfully updated.’",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Edit_your_account_information_link()"
});
formatter.result({
  "duration": 578611451,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_modify_below_information(DataTable)"
});
formatter.result({
  "duration": 595309277,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_continue_button()"
});
formatter.result({
  "duration": 435932635,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_seea_message_Success_Your_account_has_been_successfully_updated()"
});
formatter.result({
  "duration": 542575492,
  "status": "passed"
});
formatter.after({
  "duration": 273309585,
  "status": "passed"
});
});