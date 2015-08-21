var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

jest.dontMock('../app/components/app.jsx');
var App = require('../app/components/app.jsx');

describe('React', function() {
  it('renders Hello World to document.body', function() {

    // Render a hello world div to the document
    var hello = TestUtils.renderIntoDocument(
      <App />
    );

    var label = TestUtils.findRenderedDOMComponentWithTag(
      hello, 'div');
    expect(label.getDOMNode().textContent).toEqual('Hello World!');
  });

  it('should do math correctly', function() {
    var a = 1;
    var b = 2;

    expect(a + b).toEqual(3);
  });
});
