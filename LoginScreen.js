import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Buttons from './components/Buttons'
import TextField from './components/TextField'

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Buttons
        type={'gmail'}
        text={"hello World"}
        />
        <TextField></TextField>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyles: {
    color: 'orange'
  },
});
