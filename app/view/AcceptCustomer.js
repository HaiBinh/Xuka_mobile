// import React, {Component, Fragment} from 'react'
// import { StyleSheet, Platform, Image, Text, View, Button, Alert, ListView } from 'react-native'
// import { CheckBox } from 'react-native-elements';
// import MyButton from "../component/MyButton";
// import ListItem from "react-native/local-cli/templates/HelloNavigation/components/ListItem";
// import BasicFlatList from "../component/BaseListView/ListViewDemo";
// import styles from "../component/MySites/styles";
// import MyButton2 from "../component/MyButton/button2";
// import MyButton3 from "../component/MyButton/button3";
//
// type Props = {};
//
//
// class AcceptCustomer extends React.Component {
//     constructor() {
//         super();
//
//         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.state = {
//             dataSource: ds.cloneWithRows(['row 1', 'row 2']),
//         };
//     }
//
//     render() {
//         return (
//             <Fragment>
//                 <View style={styles.header}>
//                     <View style={{
//                         flexDirection:'row'
//                     }}>
//                         <CheckBox
//                             title='Nam'
//                             checked={this.state.checked}
//                         />
//                         <CheckBox
//                             center
//                             title='Click Here'
//                             checked={this.state.checked}
//                         />
//                     </View>
//                 </View>
//                 <View style={styles.body}>
//                     <View style={{
//                         flex: 1,
//                         flexDirection: 'row',
//                         justifyContent: 'flex-start',
//                         alignItems: 'center',
//                     }}>
//                         <View style={{
//                             height:50,
//                             width:50,
//                             borderRadius: 100,
//                             backgroundColor: 'green',
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                         }}>
//                             <Text>P1</Text>
//                         </View>
//                         <View style={{
//                             height:50,
//                             width:50,
//                             borderRadius: 100,
//                             backgroundColor: 'grey',
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                         }}>
//                             <Text>P2</Text>
//                         </View>
//                         <View style={{
//                             height:50,
//                             width:50,
//                             borderRadius: 100,
//                             backgroundColor: 'grey',
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                         }}>
//                             <Text>P3</Text>
//                         </View>
//                         <View style={{
//                             height:50,
//                             width:50,
//                             borderRadius: 100,
//                             backgroundColor: 'grey',
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                         }}>
//                             <Text>P4</Text>
//                         </View>
//                         <View style={{
//                             height:50,
//                             width:50,
//                             borderRadius: 100,
//                             backgroundColor: 'red',
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                         }}>
//                             <Text>P5</Text>
//                         </View>
//                     </View>
//                     <View style={{
//                         flex: 1,
//                         flexDirection: 'row'
//                     }}>
//                         <MyButton3 text={'TIỀN MẶT'} myPress={() => {}}/>
//                         <MyButton3 text={'VOUCHER'} myPress={() => {}}/>
//                     </View>
//                     <View>
//                         <MyButton2 text={'NHẬN KHÁCH'} myPress={() => this.props.navigation.navigate('Working')}/>
//                     </View>
//                     <View style={{height:150}}/>
//                 </View>
//                 <View style={styles.end}>
//                     <View>
//                         <MyButton text={`Manage`} myPress={() => {}} />
//                     </View>
//                     <View>
//                         <MyButton3 text={`Profile`} myPress={() => {}} />
//                     </View>
//                 </View>
//             </Fragment>
//         );
//     }
// }
//
//
// export default AcceptCustomer;

import React, {Component, Fragment} from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Alert, ListView, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements';
import MyButton from "../component/MyButton";
import PropTypes from "prop-types";
import ListItem from "react-native/local-cli/templates/HelloNavigation/components/ListItem";
import BasicFlatList from "../component/BaseListView/ListViewDemo";
import MyButton2 from "../component/MyButton/button2";
import MyButton3 from "../component/MyButton/button3";
import Button_Ac from "../component/MyButton/button_ac";


class MyRadio extends Component {
    static propTypes = {
        active: PropTypes.bool,
        onPress: PropTypes.func,
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string,
            PropTypes.bool, PropTypes.number])
    }
    constructor (props) {
        super(props);
    }
    onPress = () => {
        const {onPress} = this.props;
        this.active = !this.active;
        var style = styles.noneActive;
        if (this.active) {
            style = styles.activeRadio;
        }
        this.item.setNativeProps({style: style});
        if (onPress) {
            onPress();
        }
    }
    componentDidUpdate (prevProps, prevState, snapshot) {
    }
    _beforeRender = () => {
        const {label, active} = this.props;
        this.active = active;
    }
    render () {
        this._beforeRender();
        const {label, active} = this.props;
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={{flexDirection: 'row'}}>
                    <View ref={(item) => this.item = item} style={[styles.radio, active ? styles.activeRadio : styles.noneActive]}>
                    </View>
                    <View style={{justifyContent: 'center', marginLeft: 5}}>
                        <Text>{label}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

class GroupRadio extends Component {
    static propTypes = {
        name: PropTypes.string,
        defaultValue: PropTypes.string,
    }
    constructor(props) {
        super(props);
        const {label, options, defaultValue, name} = this.props;
        this.state = {value: defaultValue}
    }
    onPress = (data) => {
        this.setState({value: data.value});
    }
    render () {
        const {label, options, name} = this.props;
        const {value} = this.state;
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 10}}>
                    <Text>{label}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    {Object.values(options).map((d, idx) => <View style={{marginRight: 10}} key={idx}>
                        <MyRadio onPress={() => this.onPress(d)} active={value == d.value ? true : false} {...d}/></View> )}
                </View>
            </View>
        )
    }
}


export default class AcceptCustomer extends React.Component {
    constructor() {
        super();
        const room = {p1: {label: 'P1', value: 'p1', state: false},
            p2: {label: 'P2', value: 'p2', state: false},
            p3: {label: 'P3', value: 'p3', state: false},
            p4: {label: 'P4', value: 'p4', state: false},
            p5: {label: 'P5', value: 'p5', state: 'full'}}
        this.state = {room: room, value: {gender: 'nam', amount: 150000, _room: 'p1'}}
    }
    onPressRoom = (data) => {
        if (data.state !== 'full') {
            this.setState((prevState) => ({
                value: {
                    ...prevState.value,
                    _room: data.value
                }
            }));
        }
    }
    _renderRoom = (data, k, active) => {
        return <View key={k} style={[styles.room, styles[data.state], active ? styles.active : null]}>
            <TouchableOpacity onPress={() => this.onPressRoom(data)}>
                <Text>{data.label}</Text>
            </TouchableOpacity>
        </View>
    }
    _getData = () => {
    }
    render() {
        const {room, value} = this.state;
        const {gender, amount, _room} = value;
        return (
            <View style={{padding: 15}}>
                <View>
                    <GroupRadio ref={(gender) => this.gender = gender} label={"Khách vãng lai"} defaultValue={gender}
                                options={{nam: {label: 'Nam', value: 'nam'}, nu: {label: 'Nữ', value: 'nu'}}} />
                </View>
                <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10, justifyContent: 'space-between'}}>
                    {Object.values(room).map((d, idx) => this._renderRoom(d, idx, d.value === _room))}
                </View>
                <View>
                    <View style={{paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{fontSize: 18}}>THANH TOÁN</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: '#7cf9b8', flex: 1, padding: 10, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 18}}>TIỀN MẶT</Text>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{`${amount}đ`}</Text>
                        </View>
                        <View style={{backgroundColor: '#ccd9dd', flex: 1, padding: 10, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>VOUCHER</Text>
                        </View>
                    </View>
                    <View style={{padding: 15}}>
                        <Button_Ac
                            text={'NHẬN KHÁCH'}
                            // style={{alignSelf: 'center', backgroundColor: '#0091d0', borderRadius: 5, paddingLeft: 15, paddingRight: 15}}
                            textStyle={{fontSize: 13}}
                            // myPress={(this._getData) => {this.props.navigation.navigate('Working')}}
                            myPress={() => {this.props.navigation.navigate('Working')}}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    activeRadio: {
        borderWidth: 5, borderColor: '#4CAF50'
    },
    noneActive: {
        borderWidth: 1,
        borderColor: "#cdcdcd",
    },
    active: {
        backgroundColor: '#a1f9b0'
    },
    radio: {

        width: 20,
        height: 20,
        borderRadius: 100,
    },
    full: {
        backgroundColor: '#dc7978'
    },
    active2: {
        backgroundColor: '#7cf9b8'
    },
    room: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e6e6e6',
        borderRadius: 50,
        width: 50,
        height: 50,
    }
}