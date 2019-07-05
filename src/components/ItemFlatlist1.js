import React from 'react';
import {Image, Text, View} from 'react-native';


export default class ItemFlatlist1 extends React.Component {
    render(): React.ReactNode {
        return (
            <View>
                <Image style={{width: 100, height: 100}} source={{uri: this.props.input.hinhanhuser}}/>
                <Text>{this.props.input.name}</Text>
                <Text>{this.props.input.email}</Text>
            </View>
        );
    }
}