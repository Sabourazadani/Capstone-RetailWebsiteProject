@RetailPageLoginTest
Feature: Retail Page Login testing features

Background: 
	Given User is on Retail website 
	And User click on MyAccount 
	When  User click on Login 
	And User enter username 'sabour.azadani@gmail.com' and password 'FakePass123' 
	And User click on Login button 
	Then User should be logged in to MyAccount dashboard 
	
Scenario: Register as an Affiliate userwith Cheque Payment Method 
	When User click on‘Register for an Affiliate Account’link 
	And User fill affiliate form with below information 
		|company|website|taxID|paymentMethod|
		|Azadani Dojo|www.azadanidojo.us|12345|Azadani Dojo|
	And User check on About us check box 
	And User click on Continue button 
	Then User should see a success message 
	
Scenario: Edit your affiliate information from Cheque payment method to Bank Transfer 
	When User click on‘Edit your affiliate informationlink 
	And user click on Bank Transfer radio button 
	And User fill Bank information with below information 
		|bankName|abaNumber|swiftCode|accountName|accountNumber|
		|Afghanistan Bank|123456789|9876543210|SabourAzadani|1234598760|
	And User click on Continue AffiliateButton 
	Then User should see a success message 
	
Scenario: Edit your account Information 
	When User click on‘Edit your account information’ link 
	And User modify below information 
		|firstname|lastName|email|telephone|
		|Sabour|Azadani|sabour.azadani@gmail.com|4804322878|
	And User click on continue button 
	Then User should seea message ‘Success: Your account has been successfully updated.’  
