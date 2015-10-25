'use strict';

import './App.styl';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import { carriageReturn } from '../../actions/hearth-actions';

class App extends Component {
  render() {
    const { dispatch, text } = this.props;
    return (
        <Input
            text={text}
            dispatchCarriageReturn={(txt) => dispatch(carriageReturn(txt))}/>
      );
  }
}

function stateToProps (state) {
  return {
    text: state.text,
  }
}

App.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default connect(stateToProps)(App);
