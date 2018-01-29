import React from 'react'
import { StackNavigator } from 'react-navigation'

import LoginScreen from './containers/auth/LoginScreen'
import DashboardScreen from './containers/dashboard/DashboardScreen'

const RootNavigator = StackNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      headerTitle: 'Dashboard'
    }
  }
})

const Routes = () => <RootNavigator />

export default Routes