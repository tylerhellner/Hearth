var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var expect = require('expect');
var Hello = require('../Hello.jsx');

describe('Hello component', function() {
  it('renders the correct text', function() {
    var hello = TestUtils.renderIntoDocument(<Hello/>);
    var rendered = TestUtils.findRenderedDOMComponentWithTag(
      hello, 'h1');
    expect(rendered.getDOMNode().textContent).toEqual('Hello World!');
  })
});
