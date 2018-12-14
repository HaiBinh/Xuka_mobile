// import React, {Component, Fragment} from 'react'
// import { StyleSheet, Platform, Image, Text, View, Button, Alert } from 'react-native'
// import MyButton from "../component/MyButton";
// import styles from "../component/MySites/styles";
// import MyButton2 from "../component/MyButton/button2";
//
// type Props = {};
//
// // const onButtonPress = () => {
// //     Alert.alert('Halu');
// // };
//
// class Main extends React.Component {
//     // state = { currentUser: null }
//
//
//     render() {
//         return (
//             <Fragment>
//                 <View style={styles.header}>
//
//                 </View>
//                 <View style={styles.body}>
//                     <View style={{
//                         height: 200,
//                         width: 280,
//                         alignItems: 'center',
//                         backgroundColor: 'rgba(207, 216, 220, 1)',
//                         justifyContent: 'space-evenly',
//                         flexDirection: 'column',
//                     }}>
//                         <View>
//                             <Image resizeMode="contain" style={{
//                                 width: 65,
//                                 height: 65
//                             }} source={require('../../app/image/avata.png')}/>
//                         </View>
//                         <View>
//                             <Text style={{color: 'rgba(0, 116, 0, 1)'}}>XIN CHÀO</Text>
//                         </View>
//                     </View>
//                     <View style={{height:10}}/>
//                     <MyButton2 text={'VÀO CA'} myPress={() => this.props.navigation.navigate('Manage_Working')}/>
//                 </View>
//                 <View style={styles.end}>
//                     <View>
//                         <MyButton text={`Manage`} myPress={() => {}} />
//                     </View>
//                     <View>
//                         <MyButton text={`Profile`} myPress={() => {}} />
//                     </View>
//                 </View>
//             </Fragment>
//         );
//     }
// }
//
// const styless = StyleSheet.create({
//     container: {
//         backgroundColor: `rgba(255, 255, 255, 1)`,
//         flex: 1,
//         maxHeight: 100
//     },
//     testabc: {
//         height: 200,
//         width: 280,
//         backgroundColor: 'red',
//     },
//
//     start_Container: {
//         backgroundColor: `rgba(255, 255, 255, 1)`,
//         flex: 1,
//         justifyContent: `flex-end`,
//         maxHeight: 100,
//         alignItems: 'center'
//     },
//     mp_Father_Container: {
//         alignItems: `flex-end`,
//         backgroundColor: `rgba(255, 255, 255, 1)`,
//         flex: 1,
//         flexDirection: `row`,
//         justifyContent: `center`,
//         maxHeight: 235
//     },
//     mp_Child_Container: {
//         flex: 1,
//         justifyContent: `flex-end`
//     }
// });
//
// export default Main;
import React, {Component, Fragment} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Alert } from 'react-native'
import MyButton from "../component/MyButton";
import styles from "../component/MySites/styles";
import MyButton2 from "../component/MyButton/button2";

type Props = {};

// const onButtonPress = () => {
//     Alert.alert('Halu');
// };

class Main extends React.Component {
    // state = { currentUser: null }


    render() {
        return (
            <Fragment>
                <View style={styles.header}>

                </View>
                <View style={styles.body}>
                    <View style={{
                        height: 200,
                        width: 280,
                        alignItems: 'center',
                        backgroundColor: 'rgba(207, 216, 220, 1)',
                        justifyContent: 'space-evenly',
                        flexDirection: 'column',
                    }}>
                        <View>
                            <Image resizeMode="contain" style={{
                                width: 65,
                                height: 65
                            }} source={require('../../app/image/avata.png')}/>
                        </View>
                        <View>
                            <Text style={{color: 'rgba(0, 116, 0, 1)'}}>XIN CHÀO</Text>
                        </View>
                    </View>
                    <View style={{height:10}}/>
                    <MyButton2 text={'VÀO CA'} myPress={() => this.props.navigation.navigate('Manage_Working')}/>
                </View>
                <View style={styles.end}>
                    <View>
                        <MyButton text={`Manage`} myPress={() => {}} />
                    </View>
                    <View>
                        <MyButton text={`Profile`} myPress={() => this.props.navigation.navigate('Profile_KTV')} />
                    </View>
                </View>
            </Fragment>
        );
    }
}

const styless = StyleSheet.create({
    container: {
        backgroundColor: `rgba(255, 255, 255, 1)`,
        flex: 1,
        maxHeight: 100
    },
    testabc: {
        height: 200,
        width: 280,
        backgroundColor: 'red',
    },

    start_Container: {
        backgroundColor: `rgba(255, 255, 255, 1)`,
        flex: 1,
        justifyContent: `flex-end`,
        maxHeight: 100,
        alignItems: 'center'
    },
    mp_Father_Container: {
        alignItems: `flex-end`,
        backgroundColor: `rgba(255, 255, 255, 1)`,
        flex: 1,
        flexDirection: `row`,
        justifyContent: `center`,
        maxHeight: 235
    },
    mp_Child_Container: {
        flex: 1,
        justifyContent: `flex-end`
    }
});

export default Main;