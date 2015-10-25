'use strict';
/* global describe it */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
var expect = require('expect');
var App = require('../App');

describe('App', function() {
  it('renders without problems', function() {
    var componentInQuestion = TestUtils.renderIntoDocument(<App/>);
    expect(componentInQuestion).toExist();
  });
});
