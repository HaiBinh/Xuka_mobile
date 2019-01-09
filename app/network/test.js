import React, {Component} from 'react';
import {
    AppRegistry,
    SectionList,
    StyleSheet,
    Text,
    View,
    Alert,
    Platform,
    SpringAnimationConfig as delay
} from 'react-native';

const apiGetUser = 'http://10.20.16.121:8000/api/v1/user/';

async function getUserFromServer2() {


    return fetch(apiGetUser)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                username: responseJson.objects.username
            });
            return responseJson.objects;
        })
        .catch((error) => {
            console.error(error);
        });
}

export default class Test extends Component {


    render(){
        return(
                <View>
                    {isResponseData}
                </View>
        );
}
}