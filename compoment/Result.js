import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Result extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.state.result}</Text>
            </View>
        )
    }
}