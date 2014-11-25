'use strict';

describe('HomePage Tests', function(){

  it('should have a title Awesome Skillz', function() {
    browser.get('http://localhost:9000/');

    expect(browser.getTitle()).toEqual('Awesome Skillz');
  });

  it('should check if the person fistname cannot be longer than 40 characters', function() {

    browser.get('http://localhost:9000/person');

    var ngMessagesElement = element(by.id('errorFirstName'));
    var firstNgMessage = ngMessagesElement.element(by.css('.alert'));

    element(by.model('person.firstName')).sendKeys('');
    expect(firstNgMessage.getText()).toBe('Dit veld is verplicht');

    element(by.model('person.firstName')).sendKeys('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    expect(firstNgMessage.getText()).toBe('Teveel karakters in dit veld');



  });


  //...
});
