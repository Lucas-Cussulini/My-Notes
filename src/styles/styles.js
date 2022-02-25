import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    Container: {
        flexGrow: 1,
        backgroundColor: '#FFF',
    },

    Header: {
        flexDirection: 'row',
        width: 500,
    },

    TextHeader: {
        fontSize: 32,
        fontWeight: 'normal',
        color: '#FFF',
        height: 35,
        marginLeft: 16,
        marginTop: 35
    },

    iconHeader: { 
        height: 45,
        width: 35,
        marginTop: 40,
        marginLeft: 80
    },

    iconHearder2: {
        height: 30,
        width: 30,
        marginTop: 40,
        marginLeft: -30,
    },

    line:{
        borderBottomWidth: 3,
        borderBottomColor: '#000',
    },

    Box1: {
        flex: 2,
        height: 80,
        backgroundColor: '#0F62FE'
    },

    Box2: {
        flex: 2,
        height: 80,
        backgroundColor: '#0F62FE'
    },

    Box3: {
        flex: 2,
        height: 80,
        backgroundColor: '#0F62FE'
    },

    StackImage: {
        width: 120,
        height: 120,
        marginTop: 112,
        marginLeft: 16,
    },

    TextBody: {
        fontSize: 22,
        fontWeight: 'normal',
        marginTop: 16,
        marginLeft: 16,
        color: '#000'
    },

    TextBody2: {
        fontSize: 16,
        fontWeight: 'normal',
        marginTop: 16,
        marginLeft: 16,
    },

    BackgroundButton: {
        borderRadius: 300,
        borderColor: '#000',
        borderWidth: 2,
        height: 60,
        width: 60,
        marginLeft: 288,
        marginTop: 450,
        backgroundColor: '#0F62FE',
        position: "relative",
    },

    viewButton: {
        height: 60,
        width: 0,
        position: "absolute",
    },

    iconPlus: {
        marginLeft: 15,
        marginTop: 13,
    },

    viewButton2: {
        height: 20,
        width: 0,
    },

    BackgroundButton2: {
        borderRadius: 300,
        borderColor: '#000',
        borderWidth: 2,
        height: 60,
        width: 60,
        marginLeft: 288,
        marginTop: 80,
        backgroundColor: '#0F62FE',
    },

    iconPlus2: {
        marginLeft: 15,
        marginTop: 13,
    },
});