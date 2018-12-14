import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';

class Base extends React.Component{
    render() {
        return (
            <View style={{
                justifyContent: 'space-evenly',
                flex: 1
            }}>
                <View style={styles.header}/>
                <View style={styles.body}/>
                <View style={styles.end}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: 'red'
    },
    body:{
        height:400,
        backgroundColor: 'blue'
    },
    end: {
        height: 130,
        backgroundColor: 'green'
    }
})

export default Base