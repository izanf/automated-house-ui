import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DashboardScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to dashboard.</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
}

export default DashboardScreen
