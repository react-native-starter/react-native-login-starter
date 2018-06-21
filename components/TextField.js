import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, ViewPropTypes  } from 'react-native';
import PropTypes from 'prop-types';

export default class TextField extends Component {
    constructor(props) {
      super(props);
      this.state = { text: 'Useless Placeholder' };
    }
  
    render() {
      return (
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 0}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      );
    }
  }

