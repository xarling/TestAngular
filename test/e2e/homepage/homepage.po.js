'use strict';

var AngularHomepage = function() {

  this.persoonBtn = element(by.css('[ng-href="/person"]'));

  this.get = function() {
    browser.get('http://localhost:9000/');
  };

  this.clickOnPersoon = function() {
    this.persoonBtn.click();
  };


};

module.exports = AngularHomepage;
