import React, {useEffect} from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Alert, 
    LogBox,
    ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles3 from "../styles/styles3";
import AsyncStorage from "@react-native-async-storage/async-storage";

const keyAsync = '@notes'

const ShowNotes = ({ route, navigation}) => {
    const note = route.params.note;
    const notes = route.params.notes;
    const numberIndex = route.params.index;

    const updateData = () => {
        route?.params?.updateData();
    }

    useEffect(() => {
        LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
      }, [])

    const deleteNote = () => {

        Alert.alert('Deseja deletar essa nota?', 'Essa nota não poderá ser recuperada!',
        [
            { text: "CANCELAR", onPress: () => console.log("Cancel Pressed") },
            { text: "DELETAR", onPress: () => { deleteData()} }
        ],
            { cancelable: false });
    }

    const deleteData =  async () => {
        try {
            const newNotes = notes.filter((item, index) => index !== numberIndex);
            const valueJson = JSON.stringify(newNotes);
            await AsyncStorage.setItem(keyAsync, valueJson);
            updateData();
            ToastAndroid.show('Nota deletada com sucasso!',
            ToastAndroid.LONG); 
            goBack();

        }catch(e){
            Alert.alert(e);
        }
    }

    const goBack = () => {
        if(navigation){
            navigation.goBack();
        }
    };

    const dataAtualFormatada = () => {
        let data = new Date(note.date),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
    };

    return(

        <SafeAreaView>
            <View style={styles3.Header}>
                <TouchableOpacity onPress={() => goBack()}>
                <Icon style={styles3.Arrow} name="angle-left" size={35} color="white"/>
                </TouchableOpacity>
                <Text style={styles3.Text1}>voltar</Text>
                <TouchableOpacity onPress={() => deleteNote()}>
                <Icon style={styles3.Trash} name="trash" size={30} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('EditNotes', {
                            note,
                            notes,
                            numberIndex,
                            updateData,
                        })}>
                <Icon style={styles3.Edit} name="edit" size={35} color="white"/>
                </TouchableOpacity>
            </View>

            <View style={styles3.line}></View>

            <View>
                <Text style={styles3.TextBody}> Título da nota </Text>
                <Text style={styles3.TextTitle}>{note.title}</Text>

                <Text style={styles3.TextBody}> Descrição </Text>
                <Text style={styles3.TextDescription}>{note.description}</Text>

                <Text style={styles3.TextBody}> Prioridade </Text>
                <Text style={styles3.TextPicker}>{note.selectedValue}</Text>

                <Text style={styles3.TextBody}> Data </Text>
                <Text style={styles3.TextDate}>{dataAtualFormatada()}</Text>
            </View>
        </SafeAreaView>
    );
}

export default ShowNotes;