import React from 'react'
import { View, Text } from 'react-native'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}

const DashboardScreen = () => (
  <View style={styles.container}>
    <Text>Welcome to dashboard.</Text>
  </View>
)

export default DashboardScreen
