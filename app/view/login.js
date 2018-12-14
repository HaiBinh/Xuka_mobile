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
import { View, Text, Image, StyleSheet,StatusBar, KeyboardAvoidingView, Button, TextInput, ScrollView, Platform } from 'react-native';
import LoginForm from './LoginForm';
import MyButton from "../component/MyButton";


class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {a: null}
    }
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
                                           placeholder='Số điện thoại'
                                           value={this.state.email}
                                           placeholderTextColor='#7b7b7b'
                                           onChangeText={(text)=>{
                                               this.setState(
                                                   {email: text,}

                                               )
                                           }}

                                />

                                <TextInput style = {styles.input}
                                           returnKeyType="go" ref={(input)=> this.passwordInput = input}
                                           placeholder='******'
                                           value={this.state.password}
                                           placeholderTextColor='#7b7b7b'
                                           secureTextEntry
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
                                        myPress={() => this.props.navigation.navigate('Main')}
                                    />
                                    <Text style={{color: '#06b813', fontSize: 11, textDecorationLine: 'underline', marginTop: 10}}>Quên mật khẩu</Text>
                                </View>
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