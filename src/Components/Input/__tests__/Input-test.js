import React from 'react/addons';
import expect from 'expect';
import Input from '../Input';
const TestUtils = React.addons.TestUtils;

// var React = require('react/addons');
// var TestUtils = React.addons.TestUtils;
// var expect = require('expect');
// var Input = require('../Input.jsx');


describe('Input', function() {
  it('renders without problems', function() {
    var componentInQuestion = TestUtils.renderIntoDocument(<Input/>);
    expect(componentInQuestion).toExist();
  });
  it('contains an input field', function() {
    var componentInQuestion = TestUtils.renderIntoDocument(<Input/>);
    var expectedTag = TestUtils.findRenderedDOMComponentWithTag(
      componentInQuestion, 'input');
    expect(expectedTag.props.type).toBe('text');
  });
});
