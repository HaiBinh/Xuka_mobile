import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class FlatListItem extends Component{
    render(){
        return(
            <View style={{
                flex: 1
            }}>
                <Text>this.props.item.name</Text>
                <Text>this.props.item.status</Text>
            </View>
        );
    }
}

export default FlatListItem;