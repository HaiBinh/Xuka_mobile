import React, {Component, Fragment} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Alert, ListView } from 'react-native'
import MyButton from "../component/MyButton";
import ListItem from "react-native/local-cli/templates/HelloNavigation/components/ListItem";
import BasicFlatList from "../component/BaseListView/ListViewDemo";
import styles from "../component/MySites/styles";
import MyButton2 from "../component/MyButton/button2";
import MyButton3 from "../component/MyButton/button3";
import Button_Accept from "../component/MyButton/button_accept";
import Button_Refuse from "../component/MyButton/button_refuse";

type Props = {};


class Manage extends React.Component {
    constructor() {
        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            showcp: true,
        };
    }

    render() {
        return (
            <Fragment>
                <View style={styles.header}>
                    <MyButton2 text={`NGHỈ CA`} myPress={() => {}} />
                    {/*<MyButton2 text={`NGHỈ CA`} onPress={this.onPress()} />*/}
                    {/*<MyButton2 text={`START`} myPress={() => this.props.navigation.navigate('AcceptCustomer')} />*/}
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 30
                }}>
                    {/*{this.state.showcp}*/}
                    <Button_Accept text={'NHẬN KHÁCH'} myPress={() => this.props.navigation.navigate('AcceptCustomer')}/>
                    <Button_Refuse text={'TỪ CHỐI'} myPress={() => this .props.navigation.navigate('Refuse')}/>
                </View>
                <View style={styles.body}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        width: 400
                    }}>
                        <BasicFlatList/>
                    </View>
                </View>
                <View style={styles.end}>
                    <View>
                        <MyButton text={`Manage`} myPress={() => {}} />
                    </View>
                    <View>
                        <MyButton3 text={`Profile`} myPress={() => this.props.navigation.navigate('Profile_KTV')} />
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

export default Manage;