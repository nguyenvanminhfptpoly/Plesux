import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity,FlatList, View,ActivityIndicator} from 'react-native';
import Appstyle from '../../themes/index';
export  default class DicoverBar extends React.Component{
    static navigationOptions = {
        title: 'Welcome',
        header: null,
    };
    render(): React.ReactNode {
        return (
            <View style={Appstyle.StyleMain.container}>
                <Text>Dicovers</Text>
            </View>
        );
    }
}