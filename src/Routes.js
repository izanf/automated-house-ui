import React from 'react'
import { View } from 'react-native'
import { Route } from 'react-router-native'

import LoginScreen from './containers/auth/LoginScreen'
import DashboardScreen from './containers/dashboard/DashboardScreen'

const Routes = () => (
  <View>
    <Route exact path="/" component={LoginScreen} />
    <Route path="/dashboard" component={DashboardScreen} />
  </View>
)

export default Routes
