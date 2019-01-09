import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, AppRegistry, FlatList, TouchableHighlight} from 'react-native';
import flatListData from '../../data/flatListData';
import getUserFromServer from "../../network/server";
import PropTypes from "prop-types";
// import FlatListItem from '../../data/FlatListItem';

class FlatListItem extends Component{
    // static propTypes = {
    //     active: PropTypes.bool,
    // };
    constructor(props) {
        super(props);
        this.state = {
            bool: false
        };
    }

    changeColor(bool){
        if(bool === 1)
        {
            this.setState({
                myDynamicColor: '#9BF5BF'
            })
        }if(bool === false)
        {
            this.setState({
                myDynamicColor: '#CFD8DC'
            })
        }
    }

    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: 'column',
                // backgroundColor: 'red'
            }}>
                {/*<Text style={styles.flatitem}>*/}
                <Text style={{
                    color: 'black',
                    padding: 11,
                    fontSize: 14,
                    backgroundColor: this.props.item.id === 1 ? '#9BF5BF' : '#CFD8DC',
                    borderRadius:10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image resizeMode="contain" style={{
                        width: 40,
                        height: 40
                    }} source={require('../../image/avata.png')}/>
                    <Text>{"           "}</Text>
                    <Text style={{color: '#000000'}}>{this.props.item.first_name + this.props.item.last_name}</Text>
                </Text>

                <View style={{
                    backgroundColor: 'white',
                    height: 1,
                }}>

                </View>
            </View>
        );
    }
}


export default class BasicFlatList extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            userFromServer: []
        })
    }

    componentDidMount(): void {
        this.refreshDataFromServer();
    }

    refreshDataFromServer = () => {
        getUserFromServer().then((users) => {
            this.setState({userFromServer: users});
        }).catch((error) => {
            this.setState({userFromServer: []});
        });
    };

    render() {
        return (
            <View>
            <FlatList
                    // data={(flatListData)}
                data = {(this.state.userFromServer)}
                renderItem={({item, index}) => {
                    return(
                        <FlatListItem item={item} index={index}/>
                    )
                }}
                >
            </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatitem: {
        color: 'black',
        padding: 11,
        fontSize: 14,
        backgroundColor: '#CFD8DC',
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})