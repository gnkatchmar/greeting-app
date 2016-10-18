var assert = require('chai').assert;
var greet = require('../lib/greeting');
var greetName = '401 Student!';

describe('greeting', function() {

  var greeting = greet(greetName);
  // update '401 Student!' if greetName is changed
  var regex = /^Welcome to Node, 401 Student! Your temporary password is: /;

  it('starts with welcome phrase, greetName, password phrase', function() {
    // tests the beginning of the greeting
    assert.match(greeting, regex);
  });

  //Expected length of entire greeting based on '401 Student!'
  it('greeting length', function() {
    var greetingLength = greet(greetName).length;
    assert.equal(greetingLength, 66);
  });

});