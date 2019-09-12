import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './style.js';

class Header extends Component {
    render() {
        const { backFunc, title } = this.props;
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => backFunc()}>
                    <Text style={styles.colorWhite}>Geri</Text>
                </TouchableHighlight>
                <Text style={styles.colorWhite}>{title}</Text>
                <Text></Text>
            </View>
        );
    }
}
export default Header;