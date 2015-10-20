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

    var inputWidth = this.refs.textarea.offsetWidth;

    var oldState = 5;


    if (e.keyCode === 32) {
      console.log(oldState);
      return
      //return metrics.width;
    }

    var metrics = context.measureText(text);
    console.log('Text Width: ' + metrics.width + ',',
                'Input Width: ' + inputWidth);
    return metrics.width;
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <textarea
                  className='input_text_entry'
                  onKeyUp={this.getTextWidth}
                  ref='textarea'
                  />
      </div>
      )
  }
};
