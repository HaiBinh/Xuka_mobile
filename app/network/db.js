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

const username = 6;

// const apiGetUser = 'http://iwct.pywolf.com/api/v1/ktv/?id=' + username;
const apiGetUser = 'http://10.20.16.121:8000/api/v1/user/?id=' + username;
// const apiGetUser = 'http://192.168.1.6:8000/api/v1/ktv/?id=' + username;

//     const apiGetUser = 'https://facebook.github.io/react-native/movies.json';
//     const apiGetUser = 'https://pokeapi.co/api/v2/pokemon/'
async function getUserFromServer2() {
    // try {
    //     let response = await fetch(apiGetUser).then(r => console.log(r)).catch(e => console.log(e));
    //     let responseJson = await response.json().then(r => console.log(r));
    //     return responseJson.data;
    // } catch (error) {
    //     console.error(error);
    // }

    return fetch(apiGetUser)
        .then((response) => response.json())
        // .then(setTimeout(() => 50000))
        // .then(Alert.alert('OK'), 5000)
        .then((responseJson) => {
            return responseJson.objects;
        })
        .catch((error) => {
            console.error(error);
        });

    // fetch(apiGetUser, {
    //     method: 'GET',
    //     // headers: {
    //     //     'Accept': 'application/json',
    //     //     'content-type': 'multipart/form-data'
    //     // },form-data
    //     // body: data
    // })
    //     .then((response) => response.json())
    //     // .then(Alert('ok'))
    //     .then((responseJson) => {
    //         return responseJson.results;
    //     })
    //     .catch((error) => {
    //         console.log('err upload',error)
    //     });
}

export default getUserFromServer2;