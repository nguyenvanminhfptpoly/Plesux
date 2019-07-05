import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import AppStyle from '../themes/index';
import Logoplesux from '../assets/logoplesux.png';



export default class Splash extends React.Component{
    static navigationOptions = {
        title: 'Welcome',
        header: null,
    };
    componentDidMount(): void {
        setTimeout(()=>{
            this.props.navigation.navigate('Login')
        },2500)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={AppStyle.StyleMain.container2}>
                <TouchableOpacity >
                <Image style={AppStyle.StyleComon.image} source={Logoplesux}/>
                </TouchableOpacity>
            </View>
        );
    }
}
