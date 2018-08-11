/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* This tests that the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through each feed in the allFeeds object
         * and ensures it has a URL defined
         * and that the URL is not empty.
         */
        allFeeds.forEach(function(feed) {
            let x = feed.url;

            it('URL defined', function() {
                expect(x).toBeDefined();
                expect(x).not.toBe('');
            });
        });
        /* loops through each feed in the allFeeds object
         * and ensures it has a name defined
         * and that the name is not empty.
         */
        allFeeds.forEach(function(feed) {
            let y = feed.name;

            it('name defined', function() {
                expect(y).toBeDefined();
                expect(y).not.toBe('');
            });
        });
    });


    describe('The menu', function() {
        /* ensures the menu element is hidden by default.
         */
        const bodyClass = document.getElementsByTagName('body')[0];

        it('should have a "menu-hidden" class', function() {
            expect(bodyClass.classList.contains('menu-hidden')).toBe(true);
        });

         /* ensures the menu changes visibility
          * when the menu icon is clicked.
          * This test have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('should change visibility when clicked', function() {
            const menuIcon = document.getElementsByClassName('menu-icon-link')[0];

            menuIcon.click();
            expect(bodyClass.className).toBe('');

            menuIcon.click();
            expect(bodyClass.classList.contains('menu-hidden')).toBe(true);
         });
    });

    describe('Initial Entries', function() {
        /* ensures when the loadFeed function is called
         * and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should be at least a single entry', function() {
            const entries = document.querySelectorAll('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {
        /* ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let initialContent;
        let newContent;
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialContent = document.getElementsByClassName('feed')[0].innerHTML;
                loadFeed(1, function() {
                    newContent = document.getElementsByClassName('feed')[0].innerHTML;
                    done();
                });
            });
        });

        it('should change the content when new feed is loaded', function(done) {
            expect(newContent).not.toBe(initialContent);
            done();
        });
    });
}());
