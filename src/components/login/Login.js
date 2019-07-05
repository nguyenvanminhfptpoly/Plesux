import React from 'react';
import {Image, SafeAreaView, Text, TextInput, TouchableOpacity, View,Alert} from 'react-native';
import Logoplesux from '../../assets/logoplesux.png';
import {TextInputLayout} from 'rn-textinputlayout';
import Facebook from '../../assets/facebook.png';
import Google from '../../assets/googleplus.png';
import {connect} from 'react-redux';
import AppStyle from '../../themes'
import {getStyle} from "../../../themes";

getStyle();


class Login extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null,
    };

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    UserLoginFunction = () =>{
        const { email }  = this.state ;
        const { password }  = this.state ;
        fetch('http://192.168.0.42/loginwithreactnative/login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                // If server response message same as Data Matched
                if(responseJson === 'Data Matched')
                {
                    //Then open Profile activity and send user email to profile activity.
                    this.props.navigation.navigate('HomeScreen', { Email: email });
                }
                else{

                    Alert.alert(responseJson);
                }

            }).catch((error) => {
            console.error(error);
        });

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView style={[AppStyle.StyleMain.container,
                getStyle('bg-white')
            ]}>
                <View style={AppStyle.StyleComon.view_1}>
                    <Image style={AppStyle.StyleComon.view_1_img} source={Logoplesux}/>
                </View>
                <View style={AppStyle.StyleCommon.view2}>
                    <TextInputLayout
                        style={AppStyle.StyleComon.view2_inputLayout}
                    >
                        <TextInput
                            style={AppStyle.StyleComon.view2_textInput}
                            placeholder={'Email address'}
                            onChangeText={email => this.setState({email})}
                        />
                    </TextInputLayout>
                </View>
                <View style={AppStyle.StyleComon.view3}>
                    <TextInputLayout
                        style={AppStyle.StyleComon.view2_inputLayout}
                    >
                        <TextInput
                            style={AppStyle.StyleComon.view2_textInput}
                            placeholder={'Password'}
                            secureTextEntry={true}
                            onChangeText={password => this.setState({password})}
                        />
                    </TextInputLayout>
                </View>
                <View style={AppStyle.StyleComon.view4}>
                    <TouchableOpacity onPress={() => navigate('Forgot')}>
                        <Text style={AppStyle.StyleComon.view4_text}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={AppStyle.StyleComon.view5}>
                    <TouchableOpacity style={AppStyle.StyleComon.view5_btn_login}
                                      onPress={this.UserLoginFunction}
                        // onPress={()=> navigate('HomeScreen')}
                    >
                        <Text style={AppStyle.StyleComon.view5_text}>SIGN IN</Text>
                    </TouchableOpacity>

                </View>
                <View style={AppStyle.StyleComon.view6}>
                    <Text style={AppStyle.StyleComon.view6_text}>OR</Text>
                </View>
                <TouchableOpacity style={AppStyle.StyleComon.view7}>
                    <Image source={Facebook} style={AppStyle.StyleComon.view7_img}/>
                    <Text style={AppStyle.StyleComon.view7_text}>Login with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={AppStyle.StyleComon.view8}>
                    <Image source={Google} style={AppStyle.StyleComon.view8_img}/>
                    <Text style={AppStyle.StyleComon.view7_text}>Login with Google</Text>
                </TouchableOpacity>
                <View style={AppStyle.StyleComon.view9}>
                    <Text>New user?</Text>
                    <TouchableOpacity onPress={() => navigate('Signup')}>
                        <Text style={AppStyle.StyleComon.view9_text}>sign up</Text>
                    </TouchableOpacity>
                    <Text>here</Text>
                </View>
                <View style={AppStyle.StyleComon.view10}>
                    <Text style={AppStyle.StyleComon.view10_text}>By creating an account, you agree to our Team
                        of</Text>
                    <Text style={AppStyle.StyleComon.view10__text}>Service and Pocily</Text>
                </View>
            </SafeAreaView>
        );
    }
}

function mapStatetoProps(state) {
    return {
        email_user: state.email,
        password_user: state.password,
    }
}

export default connect(mapStatetoProps)(Login);