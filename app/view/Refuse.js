import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MyButton from '../component/MyButton';
import Button_RF from "../component/MyButton/button_rf";
import flatListData from "../data/flatListData";


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
        onPress();
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

class Option extends Component {
    static propTypes = {
        data: PropTypes.object,
        active: PropTypes.bool,
        onPress: PropTypes.func,
    }
    constructor (props) {
        super(props);
    }
    // onPress = (data) => {
    //     // alert(data.value);
    // }
    render () {
        const {data, active, onPress} = this.props;
        return (<View style={[active ? styles.active : null, {padding: 10}]}>
            <TouchableOpacity onPress={onPress}>
                <Text>{data.label}</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

class Dropdown extends Component {
    static propTypes = {
        defaultValue: PropTypes.string,
        data: PropTypes.object,
    }
    static defaultProps = {
    }
    constructor (props) {
        super(props);
        const {data, defaultValue} = this.props;
        this.show = false;
        this.state = {value: {value: defaultValue,
                label: defaultValue in data ? data[defaultValue].label : 'Select Option'}}
    }
    onToggle = () => {
        this.show = !this.show;
        this.wrap.setNativeProps({style: {display: this.show ? 'flex' : 'none'}});
    }
    onPressItem = (data) => {
        this.setState({value: data});
        this.onToggle();
    }
    render () {
        const {value} = this.state;
        const {data} = this.props;
        return (
            <View style={{position: 'relative', backgroundColor: '#efefef'}}>
                <View style={{padding: 10, backgroundColor: '#efefef'}}>
                    <TouchableOpacity onPress={this.onToggle}>
                        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                            <Text style={{color: '#4CAF50', alignSelf: 'flex-start', flex: 1}}>{value.label}</Text>
                            <Icon style={{alignSelf: 'center'}} name={"caretdown"} color="#4c4c4c" size={12}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{position: 'relative'}}>
                    <View style={{width: '100%'}}>
                        <View ref={(wrap) => this.wrap = wrap} style={{display: 'none', borderTopWidth: 1,
                            borderColor: '#e6e6e6'}}>
                            {Object.values(data).map((d, idx) =>
                                <Option key={idx} data={d} onPress={() => this.onPressItem(d)}
                                        active={d.value == value.value ? true : false} />)}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default class Refuse extends Component {
    constructor (props) {
        super(props);
        this.state = {data: 'refuse'};
    }
    onPressRadio = (name) => {
        let active = this[name].active;
        if (active) {
            this.setState({data: name})
        }
    }
    render () {
        const {data} = this.state;
        return (
            <View style={{padding: 10}}>
                <View>
                    <View>
                        <MyRadio ref={(refuse) => this.refuse = refuse} onPress={() => this.onPressRadio('refuse')}
                                 active={data == 'refuse' ? true : false}
                                 label={"Bỏ Qua Lượt"} />
                    </View>
                    <View style={{marginTop: 5, display: data == 'refuse' ? 'flex' : 'none'}}>
                        <TextInput style={{backgroundColor: '#efefef', borderRadius: 5}} placeholder={"Lí do từ chối..."} />
                    </View>
                </View>
                <View style={{marginTop: 15}}>
                    <View>
                        <MyRadio ref={(reselect) => this.reselect = reselect} onPress={() => this.onPressRadio('reselect')}
                                 active={data == 'reselect' ? true : false}
                                 label={"Khách chọn nhân viên khác"} />
                    </View>
                    <View style={{marginTop: 10, display: data == 'reselect' ? 'flex' : 'none'}}>
                        <Dropdown label={"Chon Nhan Vien"} data={flatListData} />
                    </View>
                </View>
                <View style={{padding: 15}}>
                    <Button_RF
                        text={'TỪ CHỐI'}
                        // style={{alignSelf: 'center', backgroundColor: '#e45951', borderRadius: 5, paddingLeft: 15, paddingRight: 15}}
                        textStyle={{fontSize: 13}}
                        myPress={() => {this.props.navigation.navigate('Main')}}
                    />
                </View>
            </View>
        )
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
    // active: {
    //     backgroundColor: '#a1f9b0',
    // },
    radio: {

        width: 20,
        height: 20,
        borderRadius: 100,
    },
    boxTotal: {
        flex: 1,
        padding: 15,
        justifyContent: 'center'
    },
    totalText: {
        fontSize: 18,
        textAlign: 'left',
    },
    totalAmount: {
        fontSize: 25,
        alignSelf: 'flex-end',
        fontWeight: 'bold'
    }
}