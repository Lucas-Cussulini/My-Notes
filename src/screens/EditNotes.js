import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {
    View, 
    Text, 
    TextInput, 
    ScrollView,
    TouchableOpacity,
    Alert,
    ToastAndroid
} from "react-native";

import styles4 from '../styles/styles4';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditNotes = ({route, navigation}) => {

    const key = '@notes'

    const note = route.params.note;
    const notes = route.params.notes;
    const numberIndex = route.params.numberIndex;

    const [title, setTitle] = useState(note.title); 
    const [description, setDescription] = useState(note.description);
    const [selectedValue, setSelectedValue] = useState(note.selectedValue);
    const [date, setDate] = useState(new Date(note.date));
    const [open, setOpen] = useState();

    const updateData = () => {
        route?.params?.updateData();
    }

   const noteEdited = {
    title,
    description,
    selectedValue,
    date
    };

    const editData = async () => {

        try{
            notes.filter((item, index) =>{
                if(index === numberIndex){
                    notes[numberIndex] = noteEdited;
                }
            });
            
            const valueJson = JSON.stringify(notes);
            await AsyncStorage.setItem(key, valueJson);
            updateData();
            ToastAndroid.show('Nota editada com sucasso!',
            ToastAndroid.LONG); 
            goHome();

        }catch(e){
            Alert.alert('Error', e.message);
        }
   
    }

    const goBack = () => {
        if(navigation){
            navigation.goBack();
        }
    };

    const goHome = () => {
        if(navigation){
            navigation.pop(2);
        }
    };

    const dataAtualFormatada = () => {
        var data = new Date(date),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
    };

    return(
        <ScrollView style={styles4.Container}>
        <View style={styles4.Header}>
            <View style={styles4.Box1}><Text style={styles4.Text1}> Editar nota</Text></View>
            
            <View style={styles4.Box2}>
                <TouchableOpacity onPress={() => goBack()}>
                <Icon style={styles4.back} name="close" size ={35} color= "white" /> 
                </TouchableOpacity>
            </View>
        </View>
            <View style={styles4.line}></View>


            <View>
                <Text style={styles4.TextBody}> Título da nota </Text>
                <TextInput style={styles4.InputName}
                autoCapitalize='words'
                maxLength={30}
                placeholder='Insira'
                value={title}
                onChangeText={text => setTitle(text)}/>

                <Text style={styles4.TexBody2}> Descrição </Text>
                <TextInput style={styles4.InputDescription} 
                multiline={true}
                maxLength={250}
                placeholder='Insira'
                value={description}
                onChangeText={desc => setDescription(desc)}/>

                <Text style={styles4.TexBody3}> Prioridade </Text>

                <View style={styles4.viewPicker}>
                    <Picker
                    selectedValue={selectedValue}
                    style={styles4.SelectedPicker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    <Picker.Item label={note.selectedValue} value={note.selectedValue} />
                    <Picker.Item label="Urgente" value="Urgente"/>
                    <Picker.Item label="Alta" value="Alta" />
                    <Picker.Item label="Média" value="Média" />
                    <Picker.Item label="Baixa" value="Baixa" />
                    </Picker>
                    <View style={styles4.lineSelected}></View>
                </View>
                <Text style={styles4.TexBody4}> Data </Text>

                <TouchableOpacity 
                onPress={() => setOpen(true)}>
                    <Text style={styles4.buttonDate}>{dataAtualFormatada()}</Text>
                </TouchableOpacity>
                <View style={styles4.lineDate}></View>
                <DatePicker
                    androidVariant='nativeAndroid'
                    modal
                    value={date}
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => editData()}>
                    <Text style={styles4.buttonCreate}>Editar nota</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );


};


export default EditNotes;