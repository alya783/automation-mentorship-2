const assert = require('assert')
const {Given} = require('@cucumber/cucumber')

Given('a {param} step', function(param) {
  assert.equal(param, 'PARTICULAR')
})