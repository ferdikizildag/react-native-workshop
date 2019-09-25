import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { styles } from './style.js';
import Header from 'AwesomeProject/src/components/Header';
import { connect } from 'react-redux';
import config from 'AwesomeProject/src/utils/env.js';

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
    editSchool = (name) => {
        alert(name)
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
        console.log(config)
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
                    schools.map((school, key) => {
                        var name = school.name + 'universty';
                        return (
                            <View style={[styles.schoolItem, { backgroundColor: 'red' }]} key={key}>
                                <Text>{name}</Text>
                                <Text>{school.city}</Text>
                                <TouchableOpacity style={styles.customButton} onPress={() => this.editSchool(school.name)}>
                                    <Text style={styles.buttonText}>Düzenle</Text>
                                </TouchableOpacity>
                            </View>

                        )
                    })
                }
                <TouchableOpacity style={styles.customButton} onPress={this.changeCity}>
                    <Text style={styles.buttonText}>Change City</Text>
                </TouchableOpacity>
                <Button
                    title="Go to Jane's profile"
                    onPress={() => navigate('Profile', { headerTitle: 'Deneme' })}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.home.city
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);