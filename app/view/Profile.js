import React, {Component} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import getUserFromServer2 from "../network/db";


const com_link = 'http://iwct.pywolf.com/api/logout';
const home_link = 'http://192.168.1.6:8000/api/logout';


export default class Profile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: {},
            userFromServer: [],
        }
    }
    _logOut = () => {
        return fetch(com_link, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({
            //     username: this.state.username,
            //     password: this.state.password,
            // })
        })
            .then((response) => {
                if(response.status === 200){
                    this.props.navigation.navigate('LoginScreen')
                    //console.warn(responseJson);
                    // Alert.Alert("Thông báo!","Bạn đã đăng nhập thành công!");
                }
                else{
                    // console.warn(responseJson);
                    // Alert.Alert("Thông báo!","Bạn đã đăng nhập không thành công!");

                }
            })
            .catch((error) =>{
                console.error(error);
            });
    };
    componentDidMount(){
        this.refreshDataFromServer();
        this.setState({data: {total: 70000, employee: {name: 'Trần Hồng Vân'}, l:{ amount: 60000, p:6}, s: {amount: 10000}}})
    }

    refreshDataFromServer = () => {
        let self = this;
        getUserFromServer2().then((users) => {
            self.setState({userFromServer: users[0]});
        }).catch((error) => {
            self.setState({userFromServer: []});
        });
    };
    render () {
        const {data} = this.state;
        const {employee, total, l, s} = data;
        if (employee === undefined) {
            return (null)
        }
        return (
            <View>
                <View>
                    <View>
                        <Image style={{height: 170, width: '100%'}} resizeMode="stretch" source={require('../../app/image/image_undefined.png')} />
                    </View>
                    <View style={{backgroundColor: '#788b91', padding: 15, paddingTop: 20, paddingBottom: 20}}>

                        <Text style={{color: 'white', fontSize: 20}}>{this.state.userFromServer.name}</Text>

                    </View>
                </View>
                <View style={{padding: 5}}>
                    <View style={{marginBottom: 3}}>
                        <View style={{padding: 10, backgroundColor: '#ebebeb', marginBottom: 2}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePass', {thamso: this.props.navigation.state.params.thamso})} style={{color: '#097e09'}}>
                                <Text>Đổi mật khẩu</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{padding: 10, backgroundColor: '#ebebeb'}}>
                            <TouchableOpacity onPress={this._logOut} style={{color: '#097e09'}}>
                                <Text>Đăng Xuất</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 7}}>
                        <View style={{backgroundColor: '#9af5bf', flex: 1, alignContent: 'center', padding: 10, marginRight: 7}}>
                            {/*<Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${l.p || 0} Khách`}</Text>*/}
                            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${this.state.userFromServer.number_customer_today}Khách`}</Text>


                            <Text>Đã phục vụ hôm nay</Text>
                            {/*<Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${l.amount}đ`}</Text>*/}
                            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${this.state.userFromServer.number_customer_today * this.state.userFromServer.salary_per_hours}đ`}</Text>
                        </View>
                        <View style={{backgroundColor: '#b4e7e8', flex: 1, alignContent: 'center', padding: 10}}>
                            {/*<Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${s.p || 0} Khách`}</Text>*/}
                            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${this.state.userFromServer.number_customer_bonus}Khách`}</Text>
                            <Text>Đã hỗ trợ hôm nay</Text>
                            {/*<Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${s.amount}đ`}</Text>*/}
                            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${this.state.userFromServer.number_customer_bonus * this.state.userFromServer.salary_per_hours}đ`}</Text>

                        </View>
                    </View>
                    <View style={styles.total}>
                        <View style={styles.boxTotal}>
                            <Text style={styles.totalText}>Tổng thu nhập</Text>
                        </View>
                        <View style={styles.boxTotal}>
                            <Text style={styles.totalAmount}>{`${(this.state.userFromServer.number_customer_today + this.state.userFromServer.number_customer_bonus) * this.state.userFromServer.salary_per_hours}đ`}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = {
    total: {
        backgroundColor: '#ffbe98',
        flexDirection: 'row',
        marginTop: 7,
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