'use strict';

import './Input.styl';
import React, { PropTypes } from 'react';

// To support legacy browsers, use invisible div solution.
// stackoverflow.com/questions/118241/calculate-text-width-with-javascript/

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = document.createElement('canvas');
    this.getTextWidth = this.getTextWidth.bind(this);
  }

  getTextWidth(e) {
    var text = e.target.value;
    var canvas = this.canvas;
    var context = canvas.getContext('2d');
    context.font = '500 36pt "Helvetica Neue"';

    // for performance, store emWidth and inputMargin in state at startup and
    // update inputMargin onResize (debounced). Store emWidth if the font is
    // changed. Now getTextWidth won't have to calculate this value every time
    // a key is pressed.
    const emWidth = context.measureText('M').width;
    const inputMargin = this.refs.input.offsetWidth - emWidth;

    // var oldState = 5;

    if (e.keyCode === 32) {
      // TODO handle space bar presses in a more elegant fashion
      // console.log(oldState);
      return
    }

    var metrics = context.measureText(text);

    if (e.keyCode === 13) {
      this.props.dispatchCarriageReturn(text.trim());
      this.refs.input.value = '';
    }

    if (metrics.width > inputMargin) {
      this.splitText(text)
    }

    return;
  }

  splitText(text) {
    const cleanText = text.split(' ');
    const remainder = cleanText.pop();
    // console.log(cleanText, remainder);
    this.props.dispatchCarriageReturn(cleanText.join(' '));
    this.refs.input.value = remainder;
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <p ref="overflowArea"
           style={{width: '560px', marginLeft: 'auto', marginRight: 'auto'}}>
           {this.props.text}
        </p>
        <input className="input_text_entry"
                  onKeyUp={this.getTextWidth}
                  ref="input"
                  />
      </div>
      )
  }
}

Input.PropTypes = {
  text: PropTypes.string.isRequired,
};
