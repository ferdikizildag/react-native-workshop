import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './style.js';
import Header from 'AwesomeProject/src/components/Header';

class Profile extends Component {

    render() {
        //console.log(this.props.navigation.getParam('name'));
        const { goBack, getParam } = this.props.navigation;
        return (
            <SafeAreaView>
                <Header title={getParam('headerTitle')} backFunc={goBack} />
                <Text>Profile Page</Text>


                <TouchableOpacity onPress={() => goBack()} style={styles.customButton}>
                    <Text style={styles.buttonText}>Geri</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

export default Profile;