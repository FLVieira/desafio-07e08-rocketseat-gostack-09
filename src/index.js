import React from 'react';
import './config/reactotronConfig';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0B0B0B" />
      <Routes />
    </>
  );
}
