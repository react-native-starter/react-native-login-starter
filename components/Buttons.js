import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

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
  // shape: 'round',
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
        borderRadius: 10,
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
            styles.defaultButton,
            styles.outline,
            buttonStyle,
            shapeStyle, 
          ]}>
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'twitter') {
      content = (
        <View
          style={[
            styles.defaultButton,
            styles.twitter,
            buttonStyle,
            shapeStyle,
          ]}>
          <FontAwesome name="twitter" size={30} color="white" style={styles.logo} />
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'gmail') {
      content = (
        <View
          style={[
            styles.defaultButton,
            styles.gmail,
            buttonStyle,
            shapeStyle,
          ]}>
          <FontAwesome name="google" size={30} color="white" style={styles.logo} />
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'github') {
      content = (
        <View
          style={[
            styles.defaultButton,
            styles.github,
            buttonStyle,
            shapeStyle,
          ]}>
          <FontAwesome name="github" size={30} color="white" style={styles.logo} />
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'linkedin') {
      content = (
        <View
          style={[
            styles.defaultButton,
            styles.linkedin,
            buttonStyle,
            shapeStyle,
          ]}>
          <FontAwesome name="linkedin" size={30} color="white" style={styles.logo} />
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
  logo: {
    marginRight: 20,
  },
  twitter: {
    backgroundColor: '#56A3EE',
  },
  github: {
    backgroundColor: '#333333'
  },
  gmail: {
    backgroundColor: '#CD3F18',
  },
  linkedin: {
    backgroundColor: '#0C81BB',
  },
  defaultButton: {
    marginTop: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    padding: 8,
    width: 200,
    height: 50,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  defaultText: {
    fontSize: 16,
    color: 'white'
  }
});
