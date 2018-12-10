import React, {Component, Fragment} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Alert } from 'react-native'
import MyButton from "../component/MyButton";
import {StatusBar} from "react-native";

type Props = {};

// const onButtonPress = () => {
//     Alert.alert('Halu');
// };

class Main extends Component<Props> {
    // state = { currentUser: null }


    render() {
        return (
            <Fragment>
                <View style={styles.container} />
                <View style={styles.container}>
                    <Text>hi</Text>
                </View>
                <View style={styles.container} />
                <View style={styles.start_Container}>
                    <MyButton text={`CHECK IN`} myPress={() => {}}/>
                </View>
                <View style={styles.mp_Father_Container}>
                    <View style={styles.mp_Child_Container}>
                        <MyButton text={`Manage`} myPress={() => {}} />
                    </View>
                    <View style={styles.mp_Child_Container}>
                        <MyButton text={`Profile`} myPress={() => {}} />
                    </View>
                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: `rgba(255, 255, 255, 1)`,
        flex: 1,
        maxHeight: 100
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