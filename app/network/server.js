import React, {Component} from 'react';
import {AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';

const apiGetUser = 'http://127.0.0.1:8000/api/v1/user/';
async function getUserFromServer() {
    try {
        let response = await fetch(apiGetUser).then(r => console.log(r)).catch(e => console.log(e));
        let responseJson = await response.json().then(r => console.log(r));
        return responseJson.data;
    } catch (error) {
        console.error(error);
    }

    // return fetch(apiGetUser)
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         return responseJson.data;
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
}

export default getUserFromServer;