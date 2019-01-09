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
import {StyleSheet, Platform, Image, Text, View, Button, Alert, FlatList} from 'react-native'
import MyButton from "../component/MyButton";
import styles from "../component/MySites/styles";
import MyButton2 from "../component/MyButton/button2";
import getUserFromServer from "../network/server";
import getUserFromServer2 from "../network/db";

type Props = {};

// const onButtonPress = () => {
//     Alert.alert('Halu');
// };

class FlatListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>

                <Text style={styles.flatitem}>
                    <Text style={{color: 'rgba(157, 166, 169, 1)'}}>{this.props.item.last_name}</Text>
                </Text>
            </View>
        );
    }
}

class Main extends React.Component {

    static navigationOptions = {
        // header: null,
        headerLeft: null
    };

    constructor(props) {
        super(props);
        this.state = ({
            userFromServer: []
        })
    }

    componentDidMount(): void {
        this.refreshDataFromServer();
    }

    refreshDataFromServer = () => {
        getUserFromServer2().then((users) => {
            this.setState({userFromServer: users});
        }).catch((error) => {
            this.setState({userFromServer: []});
        });
    };

    _myPress = () => {
        return fetch('http://10.20.16.121:8000/api/v1/user/?id=' + this.props.navigation.state.params.id, {
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
                    this.props.navigation.navigate('Main', {thamso: this.state.username})
                    //console.warn(responseJson);
                    // Alert.Alert("Thông báo!","Bạn đã đăng nhập thành công!");
                }
                else{
                    // console.warn(responseJson);
                    // Alert.Alert("Thông báo!","Bạn đã đăng nhập không thành công!");

                }
            })
            .catch((error) =>{
                console.error(error);
            });
    };

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
                        padding: 20
                    }}>
                        <View>
                            <Image resizeMode="contain" style={{
                                width: 65,
                                height: 65,
                                padding: 10
                            }} source={require('../../app/image/avata.png')}/>
                        </View>
                        <View>
                            <Text style={{color: 'rgba(0, 116, 0, 1)'}}>XIN CHÀO</Text>
                            <Text>{this.props.navigation.state.params.last_name}</Text>
                        </View>
                        {/*<FlatList*/}
                            {/*// data={(flatListData)}*/}
                            {/*data = {(this.state.userFromServer)}*/}
                            {/*renderItem={({item, index}) => {*/}
                                {/*return(*/}
                                    {/*<FlatListItem item={item} index={index}/>*/}
                                {/*)*/}
                            {/*}}*/}
                        {/*>*/}
                        {/*</FlatList>*/}
                    </View>
                    <View style={{height:10}}/>
                    <MyButton2 text={'VÀO CA'} myPress={() => this.props.navigation.navigate('Manage_Working', {trangthai: false})}/>
                </View>
                <View style={styles.end}>
                    <View>
                        <MyButton text={`Manage`} myPress={() => {}} />
                    </View>
                    <View>
                        <MyButton text={`Profile`} myPress={() => this.props.navigation.navigate('Profile_KTV', {thamso: this.props.navigation.state.params.thamso})} />
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