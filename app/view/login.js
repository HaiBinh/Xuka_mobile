// //import liraries
// import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';
// import LoginForm from './LoginForm';
// import MyButton from "../component/MyButton";
//
// // create a component
// class Login extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//
//                 <View style={styles.loginContainer}>
//                     <Image resizeMode="contain" style={styles.logo} source={require('../../app/image/xuka.jpg')} />
//                 </View>
//                 <View>
//                     <LoginForm />
//                 </View>
//
//             </View>
//         );
//     }
// }
//
// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFF',
//     },
//     loginContainer:{
//         alignItems: 'center',
//         flexGrow: 1,
//         justifyContent: 'center'
//     },
//     logo: {
//         position: 'absolute',
//         width: 600,
//         height: 350
//     },
//     title:{
//         color: "#FFF",
//         marginTop: 120,
//         width: 180,
//         textAlign: 'center',
//         opacity: 0.9
//     }
// });
//
// //make this component available to the app
// export default Login;
//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,StatusBar, KeyboardAvoidingView, Button, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import LoginForm from './LoginForm';
import MyButton from "../component/MyButton";
import * as Alert from "react-native";


const com_link = 'http://iwct.pywolf.com/api/login';
const com_link_2 = 'http://10.20.16.121:8000/api/login';
const home_link = 'http://192.168.1.6:8000/api/login';

class Login extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props);
        this.state = {
            a: null,
            username: "user3",
            password: "Elephas@123",
            checkLogin: 0,
            last_name:""
        }
    }

    _myPress = () => {
        let self = this;
        const {username} = this.state;
        return fetch(com_link_2, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                })
            })
            .then((response) => {
                if(response.status === 200){
                    response.json().then(data => {
                        self.setState({
                            last_name: data.last_name
                        });
                        self.props.navigation.navigate('Main', {thamso: username, last_name: data.last_name})
                    });
                }
                else{
                }
            })
            // .then((response) => response.json)
            // .then((responseJson) => {
            //     console.log(responseJson.last_name)
            // })
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
                                           autoCapitalize="none"
                                           onSubmitEditing={() => this.passwordInput.focus()}
                                           autoCorrect={false}
                                           keyboardType='email-address'
                                           returnKeyType="next"
                                           defaultValue={"user3"}
                                           placeholder='Số điện thoại'
                                           value={this.state.username}
                                           placeholderTextColor='#7b7b7b'
                                           onChangeText={(text)=>{
                                               this.setState(
                                                   {username: text,}

                                               )
                                           }}

                                />

                                <TextInput style = {styles.input}
                                           returnKeyType="go" ref={(input)=> this.passwordInput = input}
                                           placeholder='******'
                                           value={this.state.password}
                                           placeholderTextColor='#7b7b7b'
                                           secureTextEntry
                                           defaultValue={"Elephas@123"}
                                           onChangeText={(text)=>{
                                               this.setState(
                                                   {password: text,}

                                               )
                                           }}
                                />
                                {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
                                <View style={{alignItems: 'center', padding: 10}}>
                                    <MyButton
                                        text={'ĐĂNG NHẬP'}
                                        style={{alignSelf: 'center', backgroundColor: '#7d9095', borderRadius: 5, paddingLeft: 15, paddingRight: 15}}
                                        textStyle={{fontSize: 13}}
                                        // myPress={() => this.props.navigation.navigate('Main', {thamso: this.state.username})}
                                        myPress={this._myPress}
                                    />
                                    {/*<Text style={{color: '#06b813', fontSize: 11, textDecorationLine: 'underline', marginTop: 10}}>Quên mật khẩu</Text>*/}
                                </View>
                                {/*<TextInput placeholder="Username"*/}
                                           {/*placeholderTextColor="black"*/}
                                           {/*underlineColorAndroid="transparent"*/}
                                           {/*style={styles.txtInput}  onChangeText={(username) => this.setState({username:username})}/>*/}
                                {/*<TextInput placeholder="Password"*/}
                                           {/*underlineColorAndroid="transparent"*/}
                                           {/*placeholderTextColor="black"*/}
                                           {/*secureTextEntry={true}*/}
                                           {/*style={styles.txtInput}  onChangeText={(password) => this.setState({password:password})}/>*/}
                                {/*<TouchableOpacity onPress={this._myPress} style={styles.btnLogin}>*/}
                                    {/*<Text style={styles.txtLogin}>Login</Text>*/}
                                {/*</TouchableOpacity>*/}

                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}


'anh đang hỏi em kìa =(('

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
export default Login;