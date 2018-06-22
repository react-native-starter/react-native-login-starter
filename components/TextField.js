import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';


// const propTypes = {
//   text: PropTypes.string,
//   type: PropTypes.string,
//   shape: PropTypes.string,
//   textStyle: Text.propTypes.style,
//   buttonStyle: PropTypes.any,
//   disabled: PropTypes.bool,
//   onPress: PropTypes.func,
// };

const propTypes = {
    placeholder: PropTypes.string,
    shape: PropTypes.string,
    type: PropTypes.string,

};

// const defaultProps = {
//   type: 'primary',
//   shape: 'round',
//   text: 'Get Started',
//   disabled: false,
// };

export default class TextField extends React.Component {
    static propTypes = propTypes;
    //   static defaultProps = defaultProps;

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    toggleDisplay() {
        this.setState((passwordType) => !this.state.passwordType)
    }

    render() {
        const { placeholder, shape, type } = this.props;
        let secureEntry = false;
        let shapeStyle;
        
        if (type === 'password') {
            secureEntry = true;
        }

        // let shapeStyle;
        // if (['round', 'circle'].includes(shape)) {
        //   shapeStyle = {
        //     borderRadius: 5,
        //   };
        // }
        // let content;
        // if (type === 'primary') {
        //   content = (
        //     <View
        //       style={[
        //         styles.defaultButton,
        //         buttonStyle,
        //         shapeStyle
        //       ]}>
        //       <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        //     </View>
        //   );
        // }
        // else if (type === 'outline') {
        //   content = (
        //     <View
        //       style={[
        //         buttonStyle,
        //         shapeStyle, 
        //         styles.defaultButton,
        //         styles.outline
        //       ]}>
        //       <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        //     </View>
        //   );
        // }
        // else if (type === 'twitter') {
        //   content = (
        //     <View
        //       style={[
        //         buttonStyle,
        //         shapeStyle,
        //         styles.defaultButton,
        //         styles.twitter
        //       ]}>
        //       <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        //     </View>
        //   );
        // }
        // else if (type === 'gmail') {
        //   content = (
        //     <View
        //       style={[
        //         buttonStyle,
        //         shapeStyle,
        //         styles.defaultButton,
        //         styles.gmail
        //       ]}>
        //       <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        //     </View>
        //   );
        // }
        return (

            <TextInput
                style={styles.defaultTextField}
                onChangeText={(text) => this.setState({ text })}
                placeholder={placeholder}
                secureTextEntry= {secureEntry}
            />

        );
    }
}

const styles = StyleSheet.create({
    defaultTextField: {
        flexDirection: 'row',
        overflow: 'hidden',
        width: 320,
        height: 50,

    },
});
