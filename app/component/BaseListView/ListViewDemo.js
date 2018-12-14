import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, AppRegistry, FlatList } from 'react-native';
import flatListData from '../../data/flatListData';
import getUserFromServer from "../../network/server";
// import FlatListItem from '../../data/FlatListItem';

class FlatListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>

                <Text style={styles.flatitem}>
                    <Image resizeMode="contain" style={{
                        width: 40,
                        height: 40
                    }} source={require('../../image/avata.png')}/>
                    <Text>{"           "}</Text>
                    <Text style={{color: 'rgba(157, 166, 169, 1)'}}>{this.props.item.name}</Text>
                </Text>

                <View style={{
                    backgroundColor: 'white',
                    height: 1
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
                    data={(flatListData)}
                    // data = {(this.state.userFromServer)}
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
        backgroundColor: '#CFD8DC'
    }
})