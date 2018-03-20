import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-native'

import { View, Text, TextInput } from 'react-native'

class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      pass: '',
    }
  }

  handleState = (field, value) => {
    this.setState({ [field]: value })
  }

  render() {
    const { user, pass } = this.state

    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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
        color: '#551A8B',
      },
      input: {
        paddingTop: 10,
        paddingBottom: 5,
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
        textAlign: 'center',
        color: '#FFF',
        backgroundColor: '#551A8B',
        paddingTop: 10,
        paddingBottom: 10,
      },
      btnRecoveryPass: {
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
      },
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
            onChangeText={text => this.handleState('user', text)}
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
            onChangeText={text => this.handleState('pass', text)}
            underlineColorAndroid="rgba(0,0,0,0)"
          />
        </View>
        <View style={styles.btnsContainer}>
          <Link to="/dashboard">
            <Text style={styles.btnLogin}>Entrar</Text>
          </Link>
          <Link to="#construcao">
            <Text style={styles.btnRecoveryPass}>Recuperar Senha</Text>
          </Link>
        </View>
        <Text style={styles.version}>v0.0.1</Text>
      </View>
    )
  }
}

export default connect(store => ({
  auth: store.auth,
}))(LoginScreen)
