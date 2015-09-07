var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var expect = require('expect');
var App = require('../App.jsx');

describe('App', function() {
  it('renders without problems', function() {
    var componentInQuestion = TestUtils.renderIntoDocument(<App/>);
    expect(componentInQuestion).toExist();
  });
});
