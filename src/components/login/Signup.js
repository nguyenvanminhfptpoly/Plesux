import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Alert} from 'react-native';
import AppStyle from '../../themes/index';
import {TextInputLayout} from 'rn-textinputlayout';
export  default class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email   : '',
            password: '',
        }
    }
    UserRegistrationFunction = () =>{

            fetch('http://192.168.0.42/loginwithreactnative/register.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                fullname: this.state.fullName,

                email: this.state.email,

                password: this.state.password

            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // Showing response message coming from server after inserting records.
                Alert.alert(responseJson);

            }).catch((error) => {
            console.error(error);
        });

    }

    render() {
        return (
            <View style={AppStyle.StyleMain.container}>
                <TextInputLayout
                    style={AppStyle.StyleComon.view2_inputLayout}
                >
                    <TextInput
                        style={AppStyle.StyleComon.view2_textInput}
                        placeholder={'Full Name'}
                        onChangeText={newvalue => this.setState({fullName: newvalue})}
                    />
                </TextInputLayout>
                <TextInputLayout
                    style={AppStyle.StyleComon.view2_inputLayout}
                >
                    <TextInput
                        style={AppStyle.StyleComon.view2_textInput}
                        placeholder={'Email address'}
                        onChangeText={newvalue => this.setState({email: newvalue})}
                    />
                </TextInputLayout>
                <TextInputLayout
                    style={AppStyle.StyleComon.view2_inputLayout}
                >
                    <TextInput
                        style={AppStyle.StyleComon.view2_textInput}
                        placeholder={'Password'}
                        onChangeText={newvalue => this.setState({password: newvalue})}
                        secureTextEntry={true}
                    />
                </TextInputLayout>
                <View style={AppStyle.StyleComon.view5}>
                    <TouchableOpacity style={AppStyle.StyleComon.view5_btn_login} onPress={this.UserRegistrationFunction}>
                        <Text style={AppStyle.StyleComon.view5_text}>SIGN UP</Text>
                    </TouchableOpacity>

                </View>
                <View style={AppStyle.StyleCommon.view4}/>
            </View>
        );
    }
}

