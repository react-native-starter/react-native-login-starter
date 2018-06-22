import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.string,
  textStyle: Text.propTypes.style,
  buttonStyle: PropTypes.any,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};
const defaultProps = {
  type: 'primary',
  shape: 'round',
  text: 'Get Started',
  disabled: false,
};

export default class Buttons extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    const { text, buttonStyle, textStyle, type, shape, onPress } = this.props;
    console.log(text);
    let shapeStyle;
    if (['round', 'circle'].includes(shape)) {
      shapeStyle = {
        borderRadius: 5,
      };
    }
    let content;
    if (type === 'primary') {
      content = (
        <View
          style={[
            styles.defaultButton,
            buttonStyle,
            shapeStyle
          ]}>
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'outline') {
      content = (
        <View
          style={[
            buttonStyle,
            shapeStyle, 
            styles.defaultButton,
            styles.outline
          ]}>
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'twitter') {
      content = (
        <View
          style={[
            buttonStyle,
            shapeStyle,
            styles.defaultButton,
            styles.twitter
          ]}>
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'gmail') {
      content = (
        <View
          style={[
            buttonStyle,
            shapeStyle,
            styles.defaultButton,
            styles.gmail
          ]}>
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    return (
      <TouchableOpacity
        shape={shape}
        onPress={onPress}
        type={type}
      >
        {content}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
  },
  twitter: {
    backgroundColor: '#2AA3EF',
  },
  gmail: {
    backgroundColor: 'red',
  },
  defaultButton: {
    marginTop: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    width: 320,
    height: 50,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  defaultText: {
    fontSize: 16
  }
});
