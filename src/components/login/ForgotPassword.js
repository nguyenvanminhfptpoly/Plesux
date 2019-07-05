import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View,SafeAreaView} from 'react-native';
import {TextInputLayout} from "rn-textinputlayout";
import AppStyle from '../../themes'
export default class ForgotPassword extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={AppStyle.StyleMain.container}>
                <View style={AppStyle.StyleCommon.view1}>
                    <Text style={AppStyle.StyleCommon.view1_text1}>Forgot Password</Text>
                    <Text style={AppStyle.StyleCommon.view1_text2}>Enter the email address you used to create your an account</Text>
                    <Text style={AppStyle.StyleCommon.view1_text2}>we will email your a link  to reset password</Text>
                </View>
                <View style={AppStyle.StyleCommon.view2}>
                    <TextInputLayout
                        style={AppStyle.StyleCommon.view2_inputLayout}>
                        <TextInput
                            style={AppStyle.StyleCommon.view2_textInput}
                            placeholder={'Email address'}
                        />
                    </TextInputLayout>
                </View>
                    <TouchableOpacity style={AppStyle.StyleCommon.view3} onPress={()=> navigate('ConfirmP')}>
                        <Text style={AppStyle.StyleCommon.view3_text}>Submit</Text>
                    </TouchableOpacity>
                <View style={AppStyle.StyleCommon.view4}/>
            </SafeAreaView>
        )
    }
}
