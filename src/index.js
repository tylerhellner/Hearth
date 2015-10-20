import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from '../node_modules/history/lib/createBrowserHistory';
import { Provider } from 'react-redux';

import App from './components/App/App';

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import configureStore from './stores/store';
const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <div style={{height: '100%'}}>
    <Provider store={store}>
      <Router history={history}>
        <Route component={App} path="/" />
      </Router>
    </Provider>
    <DebugPanel bottom right top>
      <DevTools monitor={LogMonitor}
                store={store}
                visibleOnLoad={false}
      />
    </DebugPanel>
  </div>, document.getElementById('root')
  );

// ReactDOM.render(
//   <Router history={history}>
//     <Route component={App} path="/" />
//   </Router>, document.getElementById('root')
//   );
