import React, {Component,Fragment} from 'react';
import {View, Text, StyleSheet, Image, AppRegistry, FlatList, ListView} from 'react-native';
import MyButton from "../component/MyButton";
import BasicFlatList from "../component/BaseListView/ListViewDemo";
import Manage from "./Manage";
import styles from "../component/MySites/styles";
import CountdownClock from 'react-native-countdown-component';

class InWorking extends React.Component{
    render() {
        return (
            <Fragment>
                <View style={styles.header}>
                    <MyButton text={'RETURN'} myPress={() => {}}/>
                </View>
                <View style={styles.body}>
                    <CountdownClock/>
                    <MyButton text={'Start'} myPress={() => {}}/>
                </View>
                <View style={styles.end}>
                    <View style={styles.mp_Child_Container}>
                        <MyButton text={`Manage`} myPress={() => this.props.navigation.navigate('Main')} />
                    </View>
                    <View style={styles.mp_Child_Container}>
                        <MyButton text={`Profile`} myPress={() => {}} />
                    </View>
                </View>

            </Fragment>
        );
    }
}

export default InWorking;