/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer, createStackNavigator} from "react-navigation";
import Splash from './Splash';
import Login from './login/Login';
import Forgot from './login/ForgotPassword';
import ConfirmP from './login/ConfirmPassword';
import {createStore} from "redux";
import {Provider} from 'react-redux'
import GetStart from './GetStart';
import HomeScreen from './HomeScreen'
import Signup from './login/Signup'
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const MainNavigator = createStackNavigator({
    Home: {screen: Splash},
    Login: {screen: Login},
    Forgot: {screen: Forgot},
    ConfirmP: {screen: ConfirmP},
    GetStart: {screen: GetStart},
    HomeScreen : {screen: HomeScreen},
    Signup : {screen: Signup}
});

const App = createAppContainer(MainNavigator);

const defaultState = {
    email: '',
    password: '',
}

const reducers = (state = defaultState, action) => {
    return state;
}
const store = createStore(reducers);

const MainApp = () => {
    return <Provider
        store={store}
    >
        <App/>
    </Provider>
}

export default MainApp;

