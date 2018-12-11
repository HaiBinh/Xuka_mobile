import React, {Component,Fragment} from 'react';
import {View, Text, StyleSheet, Image, AppRegistry, FlatList, ListView, TouchableHighlight} from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'

import MyButton from "../component/MyButton";
import BasicFlatList from "../component/BaseListView/ListViewDemo";
import Manage from "./Manage";
import styles from "../component/MySites/styles";
import CountdownClock from 'react-native-countdown-component';
import MyButton2 from "../component/MyButton/button2";
import TimerCountdown from 'react-native-timer-countdown';
import MyButton3 from "../component/MyButton/button3";
import StopWatch from "react-native-stopwatch-timer/lib/stopwatch";

class InWorking extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            timerStart: false,
            stopwatchStart: false,
            totalDuration: 90000,
            timerReset: false,
            stopwatchReset: false,
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    toggleTimer() {
        this.setState({timerStart: !this.state.timerStart, timerReset: false});
    }

    resetTimer() {
        this.setState({timerStart: false, timerReset: true});
    }

    toggleStopwatch() {
        this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
    }

    resetStopwatch() {
        this.setState({stopwatchStart: false, stopwatchReset: true});
    }

    getFormattedTime(time) {
        this.currentTime = time;
    };
    render() {
        return (
            <Fragment>
                <View style={styles.header}>
                    {/*<MyButton text={'RETURN'} myPress={() => {}}/>*/}
                </View>
                <View style={styles.body}>

                    <MyButton2 text={!this.state.stopwatchStart ? "START" : "STOP"} myPress={this.toggleStopwatch}/>
                    <View>
                        <StopWatch laps msecs start={this.state.stopwatchStart}
                                   reset={this.state.stopwatchReset}
                                   // options={options}
                                   getTime={this.getFormattedTime}/>
                    </View>
                </View>
                <View style={styles.end}>
                    <View>
                        <MyButton text={`Manage`} myPress={() => this.props.navigation.navigate('Main')} />
                    </View>
                    <View>
                        <MyButton3 text={`Profile`} myPress={() => {}} />
                    </View>
                </View>

            </Fragment>
        );
    }
}

export default InWorking;