import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, AppRegistry, FlatList } from 'react-native';
import flatListData from '../../data/flatListData';
import getUserFromServer from "../../network/server";
// import FlatListItem from '../../data/FlatListItem';

class FlatListItem extends Component{

    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                {/*<View style={{*/}
                    {/*flex:1,*/}
                    {/*flexDirection: 'row'*/}
                {/*}}>*/}

                    {/*<Text style={styles.flatitem}>{this.props.item.id}</Text>*/}

                    {/*<View style={{*/}
                        {/*flex: 1,*/}
                        {/*flexDirection: 'row',*/}
                        {/*height: 70*/}

                    {/*}}>*/}
                        <Text style={styles.flatitem}>{this.props.item.id +"   "+ this.props.item.name +"   "+ this.props.item.status}</Text>
                        {/*<Text style={styles.flatitem}>{this.props.item.status}</Text>*/}
                    {/*</View>*/}
                {/*</View>*/}

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

    // constructor(props) {
    //     super(props);
    //     this.state = ({
    //         userFromServer: []
    //     })
    // }
    //
    // componentDidMount(): void {
    //     this.refreshDataFromServer();
    // }
    //
    // refreshDataFromServer = () => {
    //     getUserFromServer().then((users) => {
    //         this.setState({userFromServer: users});
    //     }).catch((error) => {
    //         this.setState({userFromServer: []});
    //     });
    // }

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
        padding: 10,
        fontSize: 14,
        backgroundColor: '#CFD8DC'
    }
})