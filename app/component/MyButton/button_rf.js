import React, {Component} from 'react';
import {} from 'react-native';
import {Text} from "react-native";
import {TouchableOpacity} from "react-native";
import styles from './styles'

export default class Button_RF extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonRFF} onPress={()=>this.props.myPress()}>
                <Text  style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}