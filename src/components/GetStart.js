import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AppStyle from  '../themes/index';
import Human from '../assets/human.png';
import Next from '../assets/next.png'
export  default class  GetStart extends  React.Component{
    static navigationOptions = {
        title: 'Welcome',
        header: null,
    };
    render()  {
        const {navigate} = this.props.navigation;
        return (
            <View style={AppStyle.StyleMain.container3}>
                <View style={AppStyle.StyleCommon.view5}>
                    <Image source={Human} style={AppStyle.StyleComon.imagegetstart} />
                </View>
                <View style={AppStyle.StyleComon.view2}>
                    <Text style={AppStyle.StyleComon.view5_text}>Mario Speedwagon</Text>
                    <Text style={AppStyle.StyleComon.view7_text}>Your account is ready! Tap to get start to proceed</Text>
                </View>
                <View style={AppStyle.StyleCommon.view_1} >
                <TouchableOpacity style={AppStyle.StyleCommon.view6} onPress={() => navigate('HomeScreen')}>
                    <Text style={AppStyle.StyleCommon.view7_text}>Get Started</Text>
                    <Image source={Next} style={AppStyle.StyleComon.view8_img}/>
                </TouchableOpacity>
                </View>
                <View style={AppStyle.StyleCommon.view4}></View>
            </View>
        );
    }
}