import React from 'react/addons';
import expect from 'expect';
import Input from '../Input';
const TestUtils = React.addons.TestUtils;

describe('Input', function() {
  it('renders without problems', function() {
    const componentInQuestion = TestUtils.renderIntoDocument(<Input/>);
    expect(componentInQuestion).toExist();
  });

  it('contains an input field', function() {
    const componentInQuestion = TestUtils.renderIntoDocument(<Input/>);
    let expectedTag = TestUtils.findRenderedDOMComponentWithTag(
      componentInQuestion, 'input');
    expect(expectedTag.props.type).toBe('text');
  });


});
