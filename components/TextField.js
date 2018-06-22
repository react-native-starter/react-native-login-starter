import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    placeholder: PropTypes.string,
    shape: PropTypes.string,
    type: PropTypes.string,

};

export default class TextField extends React.Component {
    static propTypes = propTypes;

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

        return (

            <TextInput
                style={styles.defaultTextField}
                onChangeText={(text) => this.setState({ text })}
                placeholder={placeholder}
                secureTextEntry={secureEntry}
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
