import React, { Component } from 'react'
import { shape, func } from 'prop-types'

import { AppState, View, Text, Button, TextInput, Dimensions } from 'react-native'

class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      pass: '',
      screenHeight: 0,
      appState: AppState.currentState,
    }
  }

  handleState = (field, value) => this.setState({ [field]: value })

  componentDidMount() {
    this.handleState('screenHeight', Dimensions.get('window').height)

    AppState.addEventListener('change', () => {
      this.handleState('screenHeight', Dimensions.get('window').height)
    })
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleState())
  }

  render() {
    const { user, pass, screenHeight } = this.state
    console.log(this.state.appState, this.state.screenHeight)

    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: screenHeight,
      },
      title: {
        fontSize: 30,
        marginBottom: 40,
        color: '#551A8B',
      },
      inputGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '90%',
        marginBottom: 10,
      },
      label: {
        fontWeight: 'bold',
        color: '#551A8B',
      },
      input: {
        paddingLeft: 5,
        paddingRight: 5,
        width: '100%',
        borderBottomWidth: 1,
      },
      btnsContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
      },
      btnLogin: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
        backgroundColor: '#551A8B',
        paddingTop: 10,
        paddingBottom: 10,
      },
      btnRecoveryPass: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#BBB',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
      },
      version: {
        position: 'absolute',
        bottom: 5,
        right: 10,
        color: '#CCC',
      }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Automated House</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="exemplo"
            value={user}
            onChangeText={(text) => this.handleState('user', text)}
            underlineColorAndroid="rgba(0,0,0,0)"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="******"
            value={pass}
            onChangeText={(text) => this.handleState('pass', text)}
            underlineColorAndroid="rgba(0,0,0,0)"
          />
        </View>
        <View style={styles.btnsContainer}>
          <Text
            onPress={() => this.props.navigation.navigate('Dashboard')}
            style={styles.btnLogin}
          >
            Entrar
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate('Dashboard')}
            style={styles.btnRecoveryPass}
          >
            Recuperar Senha
          </Text>
        </View>
        <Text style={styles.version}>v0.0.1</Text>
      </View>
    )
  }
}

LoginScreen.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
}

export default LoginScreen
