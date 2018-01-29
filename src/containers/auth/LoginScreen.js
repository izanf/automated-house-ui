import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the jungle.</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Dashboard')}
          title="Login"
        />
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

export default LoginScreen
