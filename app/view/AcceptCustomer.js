import React, {Component, Fragment} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Alert, ListView } from 'react-native'
import { CheckBox } from 'react-native-elements';
import MyButton from "../component/MyButton";
import ListItem from "react-native/local-cli/templates/HelloNavigation/components/ListItem";
import BasicFlatList from "../component/BaseListView/ListViewDemo";
import styles from "../component/MySites/styles";
import MyButton2 from "../component/MyButton/button2";
import MyButton3 from "../component/MyButton/button3";

type Props = {};


class AcceptCustomer extends React.Component {
    constructor() {
        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    render() {
        return (
            <Fragment>
                <View style={styles.header}>
                    <View style={{
                        flexDirection:'row'
                    }}>
                        <CheckBox
                            title='Nam'
                            checked={this.state.checked}
                        />
                        <CheckBox
                            center
                            title='Click Here'
                            checked={this.state.checked}
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            height:50,
                            width:50,
                            borderRadius: 100,
                            backgroundColor: 'green',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text>P1</Text>
                        </View>
                        <View style={{
                            height:50,
                            width:50,
                            borderRadius: 100,
                            backgroundColor: 'grey',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text>P2</Text>
                        </View>
                        <View style={{
                            height:50,
                            width:50,
                            borderRadius: 100,
                            backgroundColor: 'grey',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text>P3</Text>
                        </View>
                        <View style={{
                            height:50,
                            width:50,
                            borderRadius: 100,
                            backgroundColor: 'grey',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text>P4</Text>
                        </View>
                        <View style={{
                            height:50,
                            width:50,
                            borderRadius: 100,
                            backgroundColor: 'red',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text>P5</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <MyButton3 text={'TIỀN MẶT'} myPress={() => {}}/>
                        <MyButton3 text={'VOUCHER'} myPress={() => {}}/>
                    </View>
                    <View>
                        <MyButton2 text={'NHẬN KHÁCH'} myPress={() => this.props.navigation.navigate('Working')}/>
                    </View>
                    <View style={{height:150}}/>
                </View>
                <View style={styles.end}>
                    <View>
                        <MyButton text={`Manage`} myPress={() => {}} />
                    </View>
                    <View>
                        <MyButton3 text={`Profile`} myPress={() => {}} />
                    </View>
                </View>
            </Fragment>
        );
    }
}


export default AcceptCustomer;