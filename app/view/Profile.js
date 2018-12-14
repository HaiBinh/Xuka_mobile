import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';


export default class Profile extends Component {
    constructor (props) {
        super(props);
        this.state = {data: {}}
    }
    componentDidMount(){
        this.setState({data: {total: 70000, employee: {name: 'Trần Hồng Vân'}, l:{ amount: 60000}, s: {amount: 10000}}})
    }
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

                        <Text style={{color: 'white', fontSize: 20}}>{employee.name}</Text>
                    </View>
                </View>
                <View style={{padding: 5}}>
                    <View style={{marginBottom: 3}}>
                        <View style={{padding: 10, backgroundColor: '#ebebeb', marginBottom: 2}}>
                            <Text>Đổi mật khẩu</Text>
                        </View>
                        <View style={{padding: 10, backgroundColor: '#ebebeb'}}>
                            <Text style={{color: '#097e09'}}>Đăng Xuất</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 7}}>
                        <View style={{backgroundColor: '#9af5bf', flex: 1, alignContent: 'center', padding: 10, marginRight: 7}}>
                            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${l.p || 0} Khách`}</Text>
                            <Text>Đã phục vụ hôm nay</Text>
                            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${l.amount}đ`}</Text>
                        </View>
                        <View style={{backgroundColor: '#b4e7e8', flex: 1, alignContent: 'center', padding: 10}}>
                            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${s.p || 0} Khách`}</Text>
                            <Text>Đã hỗ trợ hôm nay</Text>
                            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${s.amount}đ`}</Text>
                        </View>
                    </View>
                    <View style={styles.total}>
                        <View style={styles.boxTotal}>
                            <Text style={styles.totalText}>Tổng thu nhập</Text>
                        </View>
                        <View style={styles.boxTotal}>
                            <Text style={styles.totalAmount}>{`${total}đ`}</Text>
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