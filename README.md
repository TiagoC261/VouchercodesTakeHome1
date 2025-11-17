# Introduction
Vouchercodes Take Home Test

# Requirements
- Runnable through the command line 
- One test that successfully performs a search for offers in local restaurants in London, on any given day, for an given number of people. 
- One test that fails (on purpose!) and will provide useful data for debugging (think logs, screenshots, videos, etc.) 
- Written in JavaScript 
---
- Passing test - Search For London Resturants
- Failed test - Search for Paris Resturants (Fails due to unmatching URL)

# Why did I choose Playwright?
1. I am the most familiar with playwright currently and comfortable using it.
2. It has great documentation and growing adoption in the Test/QA space.
3. Easy to use Locators that are also reliable! 
4. Great logging for failing tests which is invaluable when it comes to debugging - trace viewer, screenshots, videos, console logs are great and easy to use.
5. Easy to test multiple browsers and APIs.


# Getting started with playwright
Playwright has very informative and clear installation guide on its docs page find it here(https://playwright.dev/docs/intro) to get started if you haven't installed playwright before.

# Node.js install
node.js - latest version

# Info Commandline steps and useful information
To get started open command prompt and navigate to the project folder  'cd ../VochercodesTakeHome1'
Insure you have dependencies installed using `npm install` and `npx playwright install`

# Once there you can run the following commands
1. `npx playwright test --headed` - runs the tests in headed mode (You can see the browser)
2. `npx playwright test <Testfile.spec.ts>` - this command will run specfic spec files 
3. Run on specfic browsers
   + `npx playwright test --project=chromium`
   + `npx playwright test --project=firefox`
   + `npx playwright test --project=webkit`
4. `npx playwright show-report` - will show the latest report
5. `npx playwright test --ui` will open UI mode to run your tests

# Logs/Screenshots/Videos
These will be found in the `projectfile/test-results` folder
Great help for debugging and for adding to bug tickets in Jira 

# Future Scope
- If I was to improve my automation I would improve how I select options on the comboboxes for Time and Date
- Add a way to clear test-results files when a new test has run
- Create another project to run on other enviroments such as "staging"
- Add tests to a CI pipeline and monitor for failing tests

# Small extra
  - I added a test for signing up to the VIP just for fun as I really enjoyed this task thank you!
