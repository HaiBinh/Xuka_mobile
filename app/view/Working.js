import React, {Component,Fragment} from 'react';
import {View, Text, StyleSheet, Image, AppRegistry, FlatList, ListView} from 'react-native';
import MyButton from "../component/MyButton";
import BasicFlatList from "../component/BaseListView/ListViewDemo";
import Manage from "./Manage";
import styles from "../component/MySites/styles";

class startWorking extends Component{

    render(){
        return(
            <View style={{

                minHeight: 300,
                alignItems: 'center'
            }}>
                <Text>Khách hàng</Text>
                <Text>Giới tính</Text>
            </View>
        )
    }
}

// export default startWorking;

class Working extends React.Component {

    render() {
        return (
            <Fragment>
                <View style={styles.header}>
                    <MyButton text={`RETURN`} myPress={() => {}} />
                    {/*<MyButton text={`START`} myPress={() => {}} />*/}
                </View>
                <View style={styles.body}>
                    <Text>Khách hàng</Text>
                    <Text style={{paddingBottom: 35}}>Giới tính</Text>
                    <MyButton text={'START'} myPress={() => this.props.navigation.navigate('InWorking')}/>
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