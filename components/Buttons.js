import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  shape: PropTypes.string,
  textStyle: Text.propTypes.style,
  buttonStyle: PropTypes.any,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};
const defaultProps = {
  text: 'hello',
  buttonStyle: {
    flexDirection: 'row',
    overflow: 'hidden',
    width: 250,
    height: 50,
    backgroundColor: 'grey',
    alignItems:'center',
    justifyContent:'center'
  },
};

export default class Buttons extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    const { text, buttonStyle, textStyle, type, shape, onPress } = this.props;
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
            buttonStyle,
            shapeStyle
          ]}>
          <Text style={textStyle}>{text}</Text>
          </View>
      );
    }
    else if (type === 'gmail') {
      content = (
        <View
          style={[
            buttonStyle,
            shapeStyle,
          ]
          }>
          <Text style={textStyle}>{text}</Text>
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
