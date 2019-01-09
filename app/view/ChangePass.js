import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,StatusBar, KeyboardAvoidingView, Button, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import MyButton from "../component/MyButton";
import * as Alert from "react-native";

const com_link = 'http://iwct.pywolf.com/api/pass/';
const home_link = 'http://192.168.1.6:8000/api/pass/';

class ChangePass extends Component {
    constructor (props) {
        super(props);
        this.state = {
            a: null,
            old_password: "",
            new_password: "",
            confirm_pass: "",
        }
    }

    _onPress = () => {
        // if(this.state.new_password === this.state.confirm_pass){
            // this._myPress()
            // console.log(this.props.navigation.state.params.thamso)
            // console.log(this.state.old_password)
            // console.log(this.state.new_password)
            // Alert.Alert.alert([{text:'Ok'}])
        // }
        // else {
        //     // Alert.alert('False')
        // }
    };

    _myPress = () => {
        return fetch(com_link, {

            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.props.navigation.state.params.thamso,
                password: this.state.old_password,
                new_password: this.state.new_password,
            })
        })

            .then((response) => {
                if(response.status === 200){
                    this.props.navigation.navigate('Profile_KTV')
                }
                else{
                }
            })
            .catch((error) =>{
                console.error(error);
            });
    };

    render() {
        return (
            <KeyboardAvoidingView
                behavior="position"
                keyboardVerticalOffset={
                    Platform.select({
                        ios: () => 0,
                        android: () => 100
                    })()
                }
            >
                <View style={styles.container}>
                    <View style={[styles.header]}>
                        <View style={{alignItems: 'center'}}>
                            <Image style={{width: '100%', height: 200}} ref={(item) => this.item = item} resizeMode="contain" source={require('../../app/image/xuka.jpg')}/>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <View style={{width: '75%', padding: 10, paddingTop: 20, borderRadius: 5, backgroundColor: "#ced8db"}}>
                            <View style={styles.container2}>
                                <StatusBar barStyle="light-content"/>
                                <TextInput style = {styles.input}
                                           returnKeyType="go" ref={(input)=> this.passwordInput = input}
                                           placeholder='mat khau cu'
                                           value={this.state.old_password}
                                           placeholderTextColor='#7b7b7b'
                                           secureTextEntry
                                           onChangeText={(text)=>{
                                               this.setState(
                                                   {old_password: text,}

                                               )
                                           }}
                                />
                                <TextInput style = {styles.input}
                                           returnKeyType="go" ref={(input)=> this.passwordInput = input}
                                           placeholder='mat khau moi'
                                           value={this.state.new_password}
                                           placeholderTextColor='#7b7b7b'
                                           secureTextEntry
                                           onChangeText={(text)=>{
                                               this.setState(
                                                   {new_password: text,}

                                               )
                                           }}
                                />
                                <TextInput style = {styles.input}
                                           returnKeyType="go" ref={(input)=> this.passwordInput = input}
                                           placeholder='xac nhan mat khau moi'
                                           value={this.state.confirm_pass}
                                           placeholderTextColor='#7b7b7b'
                                           secureTextEntry
                                           onChangeText={(text)=>{
                                               this.setState(
                                                   {confirm_pass: text,}

                                               )
                                           }}
                                />
                                {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
                                <View style={{alignItems: 'center', padding: 10}}>
                                    <MyButton
                                        text={'CHẤP NHẬN'}
                                        style={{alignSelf: 'center', backgroundColor: '#7d9095', borderRadius: 5, paddingLeft: 15, paddingRight: 15}}
                                        textStyle={{fontSize: 13}}
                                        // myPress={() => this.props.navigation.navigate('Main', {thamso: this.state.username})}
                                        myPress={this._myPress}
                                    />
                                    {/*<Text style={{color: '#06b813', fontSize: 11, textDecorationLine: 'underline', marginTop: 10}}>Quên mật khẩu</Text>*/}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        position: 'relative'
        // backgroundColor: 'red',
        // flexDirection: 'column'
    },
    header: {
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    container2: {
        padding: 10,
    },
    input:{
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        color: 'black'
    },
    loginButton:{
        justifyContent: 'center'
    }
});

//make this component available to the app
export default ChangePass;