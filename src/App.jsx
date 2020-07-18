import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './components/Router/Routes';
import history from './components/Router/history';
import { NotificationContainer } from 'react-notifications';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Routes />
        </Router>
        <NotificationContainer />
      </div>
    </Provider>
  );
}

export default App;
