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

    var oldState = 5;

    if (e.keyCode === 32) {
      console.log(oldState);
      return
      //return metrics.width;
    }

    if (e.keyCode === 13) {
      this.splitText(inputMargin, metrics.width)
    }

    var metrics = context.measureText(text);
    // console.log('Text Width: ' + metrics.width + ',',
    //             'Input Width: ' + inputMargin,
    //             'Em Width: ' + emWidth);

    if (metrics.width > inputMargin) {
      this.splitText(inputMargin, metrics.width, text);
    }
    return metrics.width;
  }

  splitText(inputWidth, textWidth, text) {
    const cleanText = text.split(' ');
    const remainder = cleanText.pop();

    const paragraphNode = this.refs.overflowArea;
    const paragraphText = paragraphNode.innerHTML;

    paragraphNode.innerHTML = paragraphText + ' ' + cleanText.join(' ');
    this.refs.input.value = remainder;
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <p ref='overflowArea'></p>
        <input className='input_text_entry'
                  onKeyUp={this.getTextWidth}
                  ref='input'
                  />
      </div>
      )
  }
};
