import {StyleSheet} from 'react-native';
import {getStyle} from "../../themes";
getStyle();
const StyleCommon = StyleSheet.create({
    view1: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    view1_text1: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    view1_text2: {
        fontSize: 11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view2_inputLayout: {

        color: '#FF5B7F',
    },
    view2_textInput: {
        fontSize: 15,
        height: 59,
    },
    view2:{
        flex: 1,
    },
    view3: {
        flex: 0.5,
        backgroundColor: '#FF5B7F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    view3_text: {
        color: '#fff'
    },
    view4: {
        flex: 2,
    },
    view5: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view6: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },
    view7_text: {
        color:'#FD7E77',
        marginLeft: 20,
        fontSize: 12,
    },
    view8: {
        flex: 2.5,
        flexDirection: 'column',
    },
    itemdata: {
        flex: 1.5,
        borderRadius: 8,
        flexDirection: 'column',
        shadowColor: "#d7d7d7",
        marginRight: 28,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    itemdata_img:{
        flex: 4,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },

    itemdata_name: {
        flex: 1,
        fontSize: 11,
        color: '#FD7E77',
        margin: 15,
        marginBottom: 0,
    },
    itemdata_detail: {
        flex: 1,
        fontSize: 11,
        margin: 15,
        marginTop: 3,
    },
    item_andr: {
        flex: 4,
        flexDirection: 'column',
    },
    view8_img: {
        flex: 1.5,
    },
    view8_img_1: {
        width: 300,
        height: 130,
        borderRadius: 8,
    },
    view8_text: {
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        fontSize: 11,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
    }
});
export default StyleCommon;