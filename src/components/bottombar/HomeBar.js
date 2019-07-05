import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import Appstyle from '../../themes/index';
import Search from '../../assets/search.png';
import Template from '../templateflatlist/Template1';
import Android from '../../assets/androidstudio.png'
import Code from '../../assets/code2.png'

export default class HomeBar extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }

    componentDidMount(): void {
        fetch('http://192.168.0.42/loginwithreactnative/getdataview.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render(): React.ReactNode {
        return (
            <View style={Appstyle.StyleMain.container}>
                <View style={Appstyle.StyleComon.view11}>
                    <Text style={Appstyle.StyleComon.tl_text}>Discover Courses</Text>
                    <Image source={Search} style={Appstyle.StyleComon.img_search}/>
                </View>
                <View style={Appstyle.StyleCommon.view8}>
                    <FlatList horizontal={true}
                              data={this.state.dataSource}
                              keyExtractor={(item, index) => item.id}
                              renderItem={({item}) => {
                                    return (
                                        <Template input={item}/>
                                    );
                              }}
                    />
                </View>
                <View style={Appstyle.StyleComon.view12}>
                    <View style={Appstyle.StyleComon.item_adr} >
                    <Image source={Android} style={Appstyle.StyleComon.img_andr}/>
                    </View>
                    <View style={Appstyle.StyleCommon.item_andr} >
                        <Text style={Appstyle.StyleComon.view7_text}>Android UI</Text>
                        <Text style={Appstyle.StyleComon.view7_text}>Widgets are UI componets such as</Text>
                    </View>
                </View>
                <View style={Appstyle.StyleCommon.view8}>
                    <Text>Most Viewed</Text>
                    <View style={Appstyle.StyleCommon.view8_img}>
                    <Image source={Code} style={Appstyle.StyleCommon.view8_img_1}/>
                    </View>
                    <Text style={Appstyle.StyleCommon.view8_text}>The data Science Course 2019: Complete Data Science Bootcamp</Text>
                </View>
            </View>
        );
    }
}