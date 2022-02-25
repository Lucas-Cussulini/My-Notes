import { StyleSheet} from "react-native";


export default StyleSheet.create({

    Container: {
        flexGrow: 1,
        overflow: 'scroll',
        backgroundColor: '#FFF',
    },

    Header: {
        flexDirection: 'row',
        width: 500,
        height: 70,
        backgroundColor: '#0F62FE'
    },

    Arrow: {
        marginLeft: 16,
        marginTop: 25
    },

    Text1: {
        marginLeft: 15,
        fontSize: 25,
        marginTop: 25,
        color: '#FFF'
    },

    Trash: {
        marginLeft: 150,
        marginTop: 25
    },

    Edit: {
        marginLeft: 25,
        marginTop: 25
    },

    line: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
    },

    TextBody: {
        fontSize: 22,
        fontWeight: 'normal',
        marginTop: 16,
        marginLeft: 16,
        color: '#000'
    },

    TextTitle: {
        fontSize: 16,
        fontWeight: 'normal',
        marginTop: 10,
        marginLeft: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginRight: 75,
        padding: 7,
        color: '#000'
    },

    TextDescription: {
        fontSize: 16,
        fontWeight: 'normal',
        marginTop: 10,
        marginLeft: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginRight: 75,
        padding: 7,
        color: '#000'
    },

    TextPicker: {
        fontSize: 16,
        fontWeight: 'normal',
        marginTop: 10,
        marginLeft: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginRight: 75,
        padding: 7,
        color: '#000'
    },

    TextDate: {
        fontSize: 16,
        fontWeight: 'normal',
        marginTop: 10,
        marginLeft: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginRight: 75,
        padding: 7,
        color: '#000'
    }
})