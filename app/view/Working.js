import React, {Component,Fragment} from 'react';
import {View, Text, StyleSheet, Image, AppRegistry, FlatList, ListView} from 'react-native';
import MyButton from "../component/MyButton";
import BasicFlatList from "../component/BaseListView/ListViewDemo";
import Manage from "./Manage";
import styles from "../component/MySites/styles";
import MyButton2 from "../component/MyButton/button2";
import MyButton3 from "../component/MyButton/button3";
import StopWatch from "react-native-stopwatch-timer/lib/stopwatch";

class Working extends React.Component {
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
                    {/*<MyButton text={`RETURN`} myPress={() => {}} />*/}
                    {/*<MyButton text={`START`} myPress={() => {}} />*/}
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
                            <Text>Khách hàng</Text>
                            <Text style={{paddingBottom: 35}}>Giới tính</Text>
                        </View>
                    </View>
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

// const styles = StyleSheet.create({
//     mp_Father_Container: {
//         alignItems: `flex-end`,
//         backgroundColor: `rgba(255, 255, 255, 1)`,
//         flex: 1,
//         flexDirection: `row`,
//         justifyContent: `space-between`,
//         maxHeight: 235
//     }
// });

export default Working;