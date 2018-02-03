import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}> Nome do usuário </Text>

        <TextInput 
          style={styles.usuario}
          placeholder="Insira aqui o nome do usuário"
        />

        <Text 
        style={styles.text}>
        Senha
        </Text>

        <TextInput 
          style={styles.usuario}
          secureTextEntry = {true}
          placeholder="Insira aqui a senha do usuário"
        />

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
  },

  text:{
    fontWeight : 'bold',
    color: '#0084b4',
  },

  usuario:{
    height: '8%',
    width: '80%',
    
  }

}

export default LoginScreen
