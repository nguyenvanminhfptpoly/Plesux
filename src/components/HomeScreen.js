import React from 'react';
import {Text, View,Image} from 'react-native';
import Appstyle from '../themes/index';
import Homebar from './bottombar/HomeBar';
import Exambar from './bottombar/ExamBar';
import Favouries from './bottombar/FavouriesBar';
import Profilebar from './bottombar/ProfileBar';
import Dicovers from './bottombar/DicoverBar';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import HomeIcon from '../assets/homeiconsilhouette.png';
import Favouri from '../assets/favoriteheartbutton.png';
import Computer from '../assets/monitor.png';
import Univer from '../assets/collegegraduation.png';
import Profile from '../assets/manuser.png';

const HomeBarBottom = createBottomTabNavigator({

        Discover: {screen: Dicovers},
        Exambar: {screen: Exambar},
        Homebar: {screen: Homebar},
        Favouries: {screen: Favouries},
        Profilebar: {screen: Profilebar},

    },
    {
        defaultNavigationOptions: ({navigation}) => ({

            tabBarIcon: ({focused, tintColor}) =>
            {
                const{routeName} = navigation.state
                switch (routeName) {
                    case 'Homebar' : {
                        return (
                            <View style={Appstyle.StyleComon.viewIcon}>
                                <Image source={HomeIcon} style={[Appstyle.StyleComon.img_search,{ tintColor : tintColor} ]}/>
                            </View>
                        )
                    }
                    case 'Discover': {
                        return (
                            <View style={Appstyle.StyleComon.viewIcon}>
                                <Image source={Computer} style={[Appstyle.StyleComon.img_search,{ tintColor : tintColor}]}/>
                            </View>
                        )
                    }
                    case 'Exambar': {
                        return (
                            <View style={Appstyle.StyleComon.viewIcon}>
                                <Image source={Univer} style={[Appstyle.StyleComon.img_search,{ tintColor : tintColor}]}/>
                            </View>
                        )
                    }
                    case 'Favouries': {
                        return (
                            <View style={Appstyle.StyleComon.viewIcon}>
                                <Image source={Favouri} style={[Appstyle.StyleComon.img_search,{ tintColor : tintColor}]}/>
                            </View>
                        )
                    }
                    case 'Profilebar': {
                        return (
                            <View style={Appstyle.StyleComon.viewIcon}>
                                <Image source={Profile} style={[Appstyle.StyleComon.img_search,{ tintColor : tintColor}]}/>
                            </View>
                        )
                    }
                    
                }
            }
        }),
        initialRouteName: "Homebar",
        swipeEnabled: true,
        header: null,
        headerMode: 'none',
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#FF5B7F',
            inactiveTintColor: '#979797',

        },
    })

export default HomeBarBottom;