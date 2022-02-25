import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    ScrollView,
    TouchableOpacity,
    Alert,
    LogBox,
    ToastAndroid
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles2 from '../styles/styles2'
import Icon from 'react-native-vector-icons/FontAwesome';


const notesKey = '@notes'; 

const ChangeNotes = ({route, navigation}) => {

    useEffect(() => {
        LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
      }, [])

    const [selectedValue, setSelectedValue] = useState("Escolha");
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const saveNote = async () => {
        //Objeto com as propriedades dos inputs
        const note  = {
            title,
            description, 
            selectedValue,
            date,
        };

        route.params.notes.push(note);

        try {
                const jsonValue = JSON.stringify(route.params.notes);
                await AsyncStorage.setItem(notesKey, jsonValue);  
                route.params.updateData();
                ToastAndroid.show('Nota criada!',
                ToastAndroid.LONG); 
                goBack();

        } catch (e) {
            // saving error
            console.log('No Save');
          }
    };

    const goBack = () => {

        if (navigation) {
            if(navigation.params)
            navigation.params?.onNoteAdd(note);
            navigation.goBack();
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

  return (
    <ScrollView>
    <View style={styles2.Container}>
            <View style={styles2.Header}>
                <View style={styles2.Box1}><Text style={styles2.TextHeader}> Criar nota</Text></View>
                
                <View style={styles2.Box2}>
                    <TouchableOpacity onPress={() => goBack()}>
                    <Icon style={styles2.iconHeader} name="close" size ={35} color= "white" /> 
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles2.line}></View>

            <View>
                <Text style={styles2.TextBody}> Título da nota </Text>
                <TextInput style={styles2.InputName}
                autoCapitalize='words'
                placeholder='Insira'
                maxLength={30}
                value={title}
                onChangeText={text => setTitle(text)}/>

                <Text style={styles2.TexBody2}> Descrição </Text>
                <TextInput style={styles2.InputDescription} 
                multiline={true}
                maxLength={250}
                placeholder='Insira'
                value={description}
                onChangeText={desc => setDescription(desc)}/>

                <Text style={styles2.TexBody3}> Prioridade </Text>

                <View style={styles2.viewPicker}>
                    <Picker
                    selectedValue={selectedValue}
                    style={styles2.SelectedPicker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    <Picker.Item label="Escolha" value="Escolha" />
                    <Picker.Item label="Urgente" value="Urgente"/>
                    <Picker.Item label="Alta" value="Alta" />
                    <Picker.Item label="Média" value="Média" />
                    <Picker.Item label="Baixa" value="Baixa" />
                    </Picker>
                    <View style={styles2.lineSelected}></View>
                </View>

                <Text style={styles2.TexBody4}> Data </Text>

                <TouchableOpacity 
                onPress={() => setOpen(true)}>
                    <Text style={styles2.buttonDate}>{dataAtualFormatada()}</Text>
                </TouchableOpacity>
                <View style={styles2.lineDate}></View>
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
                <TouchableOpacity
                onPress={() => saveNote()}>
                    <Text style={styles2.buttonCreate}>Criar nota</Text>
                </TouchableOpacity>
            </View>
    </View>
    </ScrollView>
  );
};

export default ChangeNotes;