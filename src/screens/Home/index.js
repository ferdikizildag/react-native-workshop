import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { styles } from './style.js';
import Header from 'AwesomeProject/src/components/Header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'İstanbul',
            country: 'Turkey',
            schools: []
        }
    }
    changeCity = () => {
        this.setState({
            city: 'Ankara'
        });
        console.log(this.state.city)
    }
    componentDidMount() {
        var data = [
            {
                name: 'İtu',
                city: 'İstanbul'
            },
            {
                name: 'Odtü',
                city: 'Ankara'
            }
        ];
        this.setState({ schools: data });
    }
    render() {
        const { city, country, schools } = this.state;
        const { goBack, navigate } = this.props.navigation;
        return (
            <SafeAreaView>
                <Header title='Home' backFunc={goBack} />
                <Text>{city}</Text>
                <Text>{country}</Text>
                {
                    schools.map((school) => {
                        var name=school.name+'universty';
                        return (
                            <View>
                                <Text>{name}</Text>
                                <Text>{school.city}</Text>
                            </View>

                        )
                    })
                }
                <TouchableOpacity style={styles.customButton} onPress={this.changeCity}>
                    <Text style={styles.buttonText}>Change City</Text>
                </TouchableOpacity>
                <Button
                    title="Go to Jane's profile"
                    onPress={() => navigate('Profile', { headerTitle: 'Profile' })}
                />
            </SafeAreaView>
        );
    }
}

export default Home;