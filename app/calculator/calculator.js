/**
 * Dit is een voorbeeld. Doe dit normaal gesproken niet op deze manier. Angular zorgt ervoor dat je zaken nooit op de
 * global hoeft de registreren.
 */

(function () {
  'use strict';

  function plus() {
    var args = _.toArray(arguments);

    return _.reduce(args, function(accumulator, value) {
      return accumulator + value;
    });
  }

  function min() {

    var args = _.toArray(arguments);

    return _.reduce(args, function(accumulator, value) {
      return accumulator - value;
    });

  }

  function divide() {

  }

  function multiply() {

  }


  var Calculator = function () {
    this.plus = plus;
    this.min = min;
    this.divide = divide;
    this.multiply = multiply;
  };

  window.Calculator = Calculator;

})();
