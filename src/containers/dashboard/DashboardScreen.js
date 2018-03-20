import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

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
    <Link to="/">
      <Text>Voltar</Text>
    </Link>
  </View>
)

export default DashboardScreen
