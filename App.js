import React from 'react';
import {Provider} from 'react-redux';
import StackNavigator from './src/navigation/StackNavigator';
import {store} from './src/state/store';
import { checkPermission } from './src/helpers/helperFunction';

export default function App() {
  checkPermission();
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
