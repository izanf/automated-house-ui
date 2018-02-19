import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'


class LoginScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}>
          Nome do usuário
        </Text>
        <TextInput
          style={styles.usuario}
          placeholder="Usuário"
        />
        <Text
          style={styles.text}>
          Senha
        </Text>
        <TextInput
          style={styles.usuario}
          secureTextEntry={true}
          placeholder="Senha "
          numberOfLines={1}
        />
        <View style={styles.botoes}>
          <View >
            <Button
              onPress={() => this.props.navigation.navigate('Dashboard')}
              title="Log in"
            />
          </View>
          <View>
            <Button
              onPress={() => this.props.navigation.navigate('Dashboard')}
              title="Recuperar Senha"
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  text: {
    padding:10,
    fontWeight: 'bold',
    color: '#0084b4',
    justifyContent: 'flex-start'
  },
  usuario: {
    padding:5,
    height: '10%',
    width: '85%',
    justifyContent:'center'
  },
  botoes: {
    flexDirection: 'row',
    margin:5,
    justifyContent: 'space-around',
  }
}

export default LoginScreen
