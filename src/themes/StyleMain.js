import {StyleSheet} from 'react-native';

const StyleMain = StyleSheet.create({
    container: {
        flex: 1,
        padding: 29,
        paddingTop: 0,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5B7F',
        flexDirection: 'column'
    },
    containerToolbar: {
        position: 'absolute',
        backgroundColor: '#FF5B7F',
        elevation: 4,
        flex: 1,
    },
})
export default StyleMain;