import React, {Component, Fragment} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Alert, ListView } from 'react-native'
import MyButton from "../component/MyButton";
import ListItem from "react-native/local-cli/templates/HelloNavigation/components/ListItem";
import BasicFlatList from "../component/BaseListView/ListViewDemo";
import styles from "../component/MySites/styles";

type Props = {};


class Manage extends React.Component {
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
                    <MyButton text={`LOG OUT`} myPress={() => {}} />
                    <MyButton text={`START`} myPress={() => {}} />
                </View>
                <BasicFlatList style={styles.body}/>
                <View style={styles.end}>
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