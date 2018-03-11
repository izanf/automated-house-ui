import React from 'react'
import { NativeRouter } from 'react-router-native'
import { Provider } from 'react-redux';

import Routes from './src/Routes'
import store from './src/store'


const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <Routes />
    </NativeRouter>
  </Provider>
)

export default App
