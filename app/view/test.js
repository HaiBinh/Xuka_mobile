import {Button, View} from "react-native";
import React from "react";

export default class A extends React.Component {
    constructor(props){
        super(props)
        this.state = {showComponmentB: true}
    }

    _toggleShow = () => {
        this.setState({showComponmentB: !this.state.showComponmentB})
    }

    render() {
        return (
            <View style={{backgroundColor: 'green'}}>
                {this.state.showComponmentB && <B/>}
                <Button style={{width: 50, backgroundColor:'blue'}} title="toggle button1" onPress={this._toggleShow}/>
            </View>
        );
    }
}

export class B extends React.Component {
    render() {
        return (
            <View style={{height: 200, width: 200, backgroundColor:'red'}}/>
        );
    }
}