// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
// import Login from './app/view/login';
// import Main from "./app/view/Main";
// import Manage from "./app/view/Manage";
// import BasicFlatList from './app/component/BaseListView/ListViewDemo';
// import Working from "./app/view/Working";
// import Base from "./app/component/MySites/base";
// import InWorking from "./app/view/InWorking";
// // // import Profile from "./app/view/Profile";
// // import { StackNavigator } from 'react-navigation';
// // import { NativeRouter, Route, Link } from 'react-router-native'
//
// // import TabRouter from 'react-navigation';
// import {AppNavigator} from './app/tab/Router';
// // import {createAppContainer} from "react-navigation";
// //
// // const Testaaa = createAppContainer(MainScreenNavigator)
// // import SecondScreen from './app/tab/SecondScreen.js';
// // // import FirstScreen from "./app/tab/FirstScreen";
// // // import SecondScreen from "./app/tab/SecondScreen";
// // // import {TabRouter} from 'react-navigation';
// // //
// // const MainScreenNavigator = StackNavigator({
// //     Tab1: {screen: FirstScreen},
// //     Tab2: {screen: SecondScreen}
// // })
// // //
// // // MainScreenNavigator.navigationOptions = {
// // //   title: "Tab example"
// // // }
// // //
// // export default MainScreenNavigator;
// // const instructions = Platform.select({
// //   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
// //   android:
// //     'Double tap R on your keyboard to reload,\n' +
// //     'Shake or press menu button for dev menu',
// // });
//
//
//
// // type Props = {};
// export default class App extends Component<Props> {
//   render() {
// //     // return (
// //     //   <View style={styles.container}>
// //     //     <Text style={styles.welcome}>Welcome to React Native!</Text>
// //     //     <Text style={styles.instructions}>To get started, edit App.js</Text>
// //     //     <Text style={styles.instructions}>{instructions}</Text>
// //     //       <Login/>
//     //   </View>
//     // );
//       return(
//           <AppNavigator/>
//       );
//   }
// }
//
// // export default class DemoLogin extends Component {
// //     render() {
// //         return (
// //             <Login/>
// //         );
// //     }
// // }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from "./app/view/Main";
import Login from "./app/view/login";
import Working from "./app/view/Working";
import InWorking from "./app/view/InWorking";
import Manage from "./app/view/Manage"; // Version can be specified in package.json

class HomeScreen extends React.Component {
    render() {
        return (

            <Main/>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        Mainabc: Manage,
        Login: Login,
        InWorking: InWorking,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
