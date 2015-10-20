import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from '../node_modules/history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
// import configureStore from './stores/store';
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import App from './components/App/App';

const history = createBrowserHistory();
// const store = configureStore();

// ReactDOM.render(
//   <div>
//     <Provider store={store}>
//       <Router history={history}>
//         <Route component={App} path="/" />
//       </Router>
//     </Provider>
//   </div>, document.getElementById('root')
//   );

ReactDOM.render(
    <Router history={history}>
      <Route component={App} path="/" />
    </Router>, document.getElementById('root')
  );
