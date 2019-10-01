import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './style.js';
import Header from 'AwesomeProject/src/components/Header';

import helper, { loadPage } from './script';

//const file = require('./script.js')

class JsExample extends Component {
    componentDidMount() {
        loadPage()
        //helper.loadPage2()
    }
    render() {
        const { goBack, getParam } = this.props.navigation;
        return (
            <View style={{ flex: 1, paddingVertical: 50, backgroundColor: 'gray' }}>
                <Text>Hello Page</Text>
            </View>
        );
    }
}

export default JsExample;