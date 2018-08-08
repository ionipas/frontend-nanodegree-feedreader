# Feed Reader Testing

*Udacity | Front End Web Developer Nanodegree | Project 4: Feed Reader Testing*

This project is a web-based application that reads RSS feeds.

#### About this application

- It has the functionality to switch between different feeds via a menu.
- It displays the headings of the articles from the selected feed with links to original source website.
- It contains a number of tests against the application. These are testing the underlying business logic of the application as well as the event handling and DOM manipulation.

#### How will I complete this project

- Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
- Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
- Write a new test suite named `"The menu"`.
- Write a test that ensures the menu element is hidden by default.
- Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
- Write a test suite named `"Initial Entries"`.
- Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
- Write a test suite named `"New Feed Selection"`.
- Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
- No test should be dependent on the results of another.

#### How to run this project

- Clone the repository using the Web URL `https://github.com/ionipas/frontend-nanodegree-feedreader.git`
- Open index.html in your browser

#### Built using

- HTML
- CSS
- JavaScript
- Jasmine	

