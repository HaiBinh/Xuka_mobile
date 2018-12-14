// import React, { Component } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';
// import MyButton from '../component/MyButton';
// // import { StackNavigator } from 'react-navigation';
// import Main from '../../app/view/Main';
// // import Navigator from '../component/MyButton/add';
//
//
// // create a component
// class LoginForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//         }
//     }
//
//     // static navigationOptions = {
//     //     title: 'Frist screen',
//     // }
//
//     render() {
//         // var {navigate} = this.props.navigation;
//         return (
//             <View style={styles.container}>
//                 <StatusBar barStyle="light-content"/>
//                 <TextInput style = {styles.input}
//                            autoCapitalize="none"
//                            onSubmitEditing={() => this.passwordInput.focus()}
//                            autoCorrect={false}
//                            keyboardType='email-address'
//                            returnKeyType="next"
//                            placeholder='Email or Mobile Num'
//                            value={this.state.email}
//                            placeholderTextColor='rgba(225,225,225,0.7)'
//                            onChangeText={(text)=>{
//                                this.setState(
//                                    {email: text,}
//
//                                )
//                            }}
//
//                 />
//
//                 <TextInput style = {styles.input}
//                            returnKeyType="go" ref={(input)=> this.passwordInput = input}
//                            placeholder='Password'
//                            value={this.state.password}
//                            placeholderTextColor='rgba(225,225,225,0.7)'
//                            secureTextEntry
//                            onChangeText={(text)=>{
//                                this.setState(
//                                    {password: text,}
//
//                                )
//                            }}
//                 />
//                 {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
//                 <MyButton
//                     text={'Login'}
//                     // myPress={() => navigate   ('Second', {})}
//                     myPress={() => {this.props.navigation.navigate('Main')}}
//                 />
//
//             </View>
//         );
//     }
// }
//
// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         padding: 10
//     },
//     input:{
//         height: 40,
//         backgroundColor: 'rgba(225,225,225,0.2)',
//         marginBottom: 10,
//         padding: 10,
//         color: 'black'
//     },
//
//     loginButton:{
//         justifyContent: 'center'
//     }
//
// });
//
// //make this component available to the app
// export default LoginForm;
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';
import MyButton from '../component/MyButton';
// import { StackNavigator } from 'react-navigation';
// import Main from '../../app/view/Main';
// import Navigator from '../component/MyButton/add';


// create a component
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onPressLogin = () => {

    }
    render() {
        // var {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
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
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
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
export default LoginForm;