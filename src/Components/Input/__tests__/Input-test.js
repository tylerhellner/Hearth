'use strict';
/* global describe it */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Input from '../Input';

describe('Input', function() {
  it('renders without problems', function() {
    const componentInQuestion = TestUtils.renderIntoDocument(<Input/>);
    expect(componentInQuestion).toExist();
  });

  it('contains a textarea', function() {
    const componentInQuestion = TestUtils.renderIntoDocument(<Input/>);
    let expectedTag = TestUtils.findRenderedDOMComponentWithTag(
      componentInQuestion, 'input');
    expect(expectedTag.className).toBe('input_text_entry');
  });


});
