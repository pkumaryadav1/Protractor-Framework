
let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {

        //browser.get('http://juliemr.github.io/protractor-demo/')
        homepage.get('http://juliemr.github.io/protractor-demo')

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('3');

        //element(by.model('second')).sendKeys('4');
        homepage.enterSecondNumber('3');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding', '6'))
        homepage.verifyResult('6')

        // expect(result.getText()).toEqual('6');
        browser.sleep(2000)

    });


    it('Subtraction test', function () {

        //browser.get('http://juliemr.github.io/protractor-demo/')
        homepage.get('http://juliemr.github.io/protractor-demo')

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('3');

        //element(by.model('second')).sendKeys('4');
        homepage.enterSecondNumber('3');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding', '6'))
        homepage.verifyResult('9')

        // expect(result.getText()).toEqual('6');
        browser.sleep(2000)

    });

    it('Multiplication test', function () {

        //browser.get('http://juliemr.github.io/protractor-demo/')
        homepage.get('http://juliemr.github.io/protractor-demo')

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('2');

        //element(by.model('second')).sendKeys('4');
        homepage.enterSecondNumber('2');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding', '6'))
        homepage.verifyResult('4')

        // expect(result.getText()).toEqual('6');
        browser.sleep(2000)

    });

    it('DIVISION test', function () {

        //browser.get('http://juliemr.github.io/protractor-demo/')
        homepage.get('http://juliemr.github.io/protractor-demo')

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('2');

        //element(by.model('second')).sendKeys('4');
        homepage.enterSecondNumber('2');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding', '6'))
        homepage.verifyResult('4')

        // expect(result.getText()).toEqual('6');
        browser.sleep(1000)

    });

   


});