import 'normalize-css';
import './stylesheets/main.styl'

import React from 'react';
import App from './components/App';

function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);
  React.render(<App/>, app);
}

main();
