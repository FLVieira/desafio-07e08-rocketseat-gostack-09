import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/reactotronConfig';

import Routes from './routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0B0B" />
      <Routes />
    </Provider>
  );
}
