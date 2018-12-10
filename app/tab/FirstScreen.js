import React, {Component} from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';
import SecondScreen from './SecondScreen'

export default class FirstScreen extends Component{
    // static navigationOptions = {
    //     tabBarLabel: 'Tab1'
    // }

    render() {
        // const {navigation} =this.props.navigation;
        return (
            <View>
                <Text>aaaaaaaaaaaaaaaaa</Text>
                <Button title={"go to 2"} onPress={() => this.props.navigation.navigate('Details')}/>
            </View>
        );
    }
}