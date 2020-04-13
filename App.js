import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

class App extends Component {
  state = {
    email: '',
    password: ''
  };
  constructor(props) {

    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }


  onClickListener = (viewId) => {
    if (viewId === 'login') {
      Alert.alert(this.state.password + this.state.email);
    }

  }

  handleEmailChange(text) {
    this.setState({ email: text })
  }
  handlePasswordChange(text) {
    this.setState({ password: text })
  }


  render() {
    return (
      <View testID="loginView" style={styles.container}>

        <View style={styles.boxwithlogocontainer}>
          <Text style={styles.font}>Welcome to Detox example</Text>
        </View>
        <View style={styles.inputContainer}>

          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={this.handleEmailChange}
            testID="emailInput"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={this.handlePasswordChange}
            testID="passwordInput"
          />

        </View>

        <TouchableHighlight testID="loginButton" style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight testID="forgotButton" style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight testID="registerButton" style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
          <Text>Register</Text>
        </TouchableHighlight>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageSize: {
    width: 100,
    height: 100
  },
  boxwithlogocontainer: {
    marginTop: 60,
    marginBottom: 60,
    paddingHorizontal: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  font: {
    fontSize: 20
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});



export default App;