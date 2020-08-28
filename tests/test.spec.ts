var webdriver = require('selenium-webdriver');
var chromeDriver = require('selenium-webdriver/chrome');
// @ts-ignore
jest.retryTimes(3);
// retry 
describe('Get results', function () {
    // test('Should Always Pass', () => {
    //     expect(1).toBe(1);
    // });

    // test('Should Sometimes Pass', () => {
    //     const someNum = Math.floor(Math.random() * 10);
    //     console.log('randomly chosen number: ' + someNum);
    //     expect(someNum).toBeGreaterThan(10);
    // });

    // test('Should Always Fail', () => {
    //     expect(2).toBe(1);
    // });

    test('Screenshot Chrome', () => {
        var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chromeDriver.Options()
        .addArguments("window-size=1920,1080"))
        .build();
    
        driver.get('https://www.bing.com/search?q=test');
        
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('1.png', image, 'base64', function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('success!!!')
                    }
                });
            }
        );
        
    driver.quit();
    });
});
