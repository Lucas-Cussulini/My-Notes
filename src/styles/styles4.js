import { StyleSheet} from "react-native";

export default StyleSheet.create({

    Container: {
        flexGrow: 1,
        overflow: 'scroll',
        backgroundColor: '#EFEFEF'
    },

    Header: {
        flexDirection: 'row',
        width: 500,
        height: 70,
        backgroundColor: '#0F62FE'
    },

    Text1: {
        marginLeft: 15,
        fontSize: 25,
        marginTop: 25,
        color: '#FFF'
    },

    back: {
        marginLeft: 150,
        marginTop: 25
    },

    line: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
    },

    TextBody: {
        fontSize: 17,
        fontWeight: 'normal',
        marginTop: 30,
        marginLeft: 16,
        color: '#000'
    },

    InputName: {
        borderColor: '#000',
        borderBottomWidth: 1,
        margin: 16,
        paddingLeft: 16,
        backgroundColor: '#FFF'
    },

    TexBody2: {
        fontSize: 17,
        fontWeight: 'normal',
        marginTop: 16,
        marginLeft: 16,
        color: '#000'
    },

    InputDescription: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        margin: 16,
        height: 150,
        paddingBottom: 100,
        paddingLeft: 16,
        backgroundColor: '#FFF'
    },

    TexBody3: {
        fontSize: 17,
        fontWeight: 'normal',
        marginTop: 16,
        marginLeft: 16,
        color: '#000'
    },

    SelectedPicker: {
        height: 40,
        margin: 16,
        backgroundColor: '#FFF',
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },

    lineSelected: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginLeft: 16,
        marginEnd: 16,
        marginBottom: 16,
        marginTop: -15
    },

    TexBody4: {
        fontSize: 17,
        fontWeight: 'normal',
        marginTop: 16,
        marginLeft: 16,
        color: '#000'
    },

    buttonCreate: {
        backgroundColor: '#0F62FE',
        fontSize: 25,
        color: '#FFF',
        padding: 4,
        textAlign: 'center'
    },

    buttonDate: {
        backgroundColor: '#FFF',
        color: '#000',
        fontSize: 17,
        paddingLeft: 12,
        margin: 16,
        paddingTop: 8,
        height: 40,
    },

    lineDate: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginLeft: 16,
        marginEnd: 16,
        marginBottom: 16,
        marginTop: -15,
        opacity: 0.8
    }

});