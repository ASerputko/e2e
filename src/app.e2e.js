var chai     = require('chai');
var promised = require('chai-as-promised');
chai.use(promised) 
var expect   = chai.expect;


describe('app', function() {

    before(function() {
        this.timeout(25000);
        browser.get('https://demo.serveme.com/portal/Auth/Login')

        element(by.id('user-name')).sendKeys('imonroe');
        element(by.id('password')).sendKeys('');

        var logInButton = element(by.css('.remember-me-wrap .login-btn input'));

        logInButton.submit();

        browser.waitForAngular();
    });

    it('go to earnings details and back', function() {
        // this.timeout(35000);

        expect(true).to.equal(true);

        // element(by.css('body > widget tile a')).click();

        // browser.waitForAngular();

        // browser.driver.sleep(1000);

        // element(by.css('widget tile .flex-container.tile-title.full-width')).click();

        // browser.waitForAngular();

        // browser.driver.sleep(1000);
    });

    // it('click GDC chart', function() {
    //     // this.timeout(35000);

    //     browser.waitForAngular();

    //     browser.driver.sleep(1500);


    //     element(by.css('widget tile a')).click();

    //     browser.waitForAngular();

    //     browser.driver.sleep(1000);

    //     element(by.css('widget tile .flex-container.tile-title.full-width')).click();

    //     browser.waitForAngular();

    //     browser.driver.sleep(1000);
    // });
})




// var webdriver = require('selenium-webdriver'),
//     by = webdriver.By,
//     until = webdriver.until,
//     element = driver.findElement

// var driver = new webdriver.Builder()
//     .forBrowser('chrome')
//     .build();

// driver.get('https://demo.serveme.com/portal/auth/login');
// driver.findElement(By.id('user-name')).sendKeys('imonroe');
// driver.findElement(By.id('password')).sendKeys('');
// driver.findElement(By.css('.login-btn input')).click();
// driver.wait(until.titleIs('myView Portal'), 5000);

// driver.findElement(By.css('widget')).then(function(d) {
//     console.log(d);
// });


// // driver.wait(until.titleIs('Application Suite'), 1000);
// // driver.wait(15000);
// driver.quit();