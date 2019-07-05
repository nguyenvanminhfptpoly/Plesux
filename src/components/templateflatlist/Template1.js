import React from 'react';
import {Image, SafeAreaView, Text, TextInput, TouchableOpacity, View,Alert} from 'react-native';
import AppStyle from "../../themes";

export default class Template1 extends React.Component{
    render() {
        return (
            <View style={AppStyle.StyleCommon.itemdata}>

                <Image style={AppStyle.StyleCommon.itemdata_img}   source={{uri: this.props.input.image}}/>

                <Text style={AppStyle.StyleCommon.itemdata_name}>{this.props.input.name}</Text>
                <Text style={AppStyle.StyleCommon.itemdata_detail}>{this.props.input.detail}</Text>
            </View>
        );
    }
}