import React from 'react';
import App from './Components/App/App';

function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);
  React.render(<App/>, app);
}

main();
