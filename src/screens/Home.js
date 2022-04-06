import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    SafeAreaView,
    Image, 
    FlatList,
    ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import Layers from '../img/layers.png'
import styles from '../styles/styles'
import Notes from '../components/Notes';

const Home = ({route, navigation}) => {

    const [notes, setNotes] = useState();

    useEffect(() => {

        getNotes();
    }, []);

    const getNotes = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@notes')
          //Assync sempre devolve string
          const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : [];
          setNotes(parsedValue);
        } catch(e) {
          // error reading value
          console.log('Error', e);
        }
    };

    const updateNotes = (note) => {
        notes.push(note);

        console.log('Retornei com parametro e atualizei as notas!' + JSON.stringify(notes));
    }

        if(notes != 0){

            return (
                <SafeAreaView style={styles.Container}>
                    <ScrollView>
                    <View style={styles.Header}>
                        <View style={styles.Box1}><Text style={styles.TextHeader}>Notas</Text></View>
                        <View style={styles.Box2}></View>
                        <View style={styles.Box3}>
                            <TouchableOpacity onPress={() => navigation.navigate('ChangeNotes', {
                                notes,
                                updateData: getNotes,
                            })}>
                            <Icon style={styles.iconHearder2} name="plus" size ={35} color= "white" />   
                            </TouchableOpacity>
                        </View>
                    </View>
            
                    <View style={styles.line}></View>
            
                    <FlatList
                    data={notes}
                    numColumns={2}
                    keyExtractor={(note, index) => String(index)}
                    renderItem={({ item, index }) => {
                        return <Notes updateData={getNotes} notes={notes} navigation={navigation} note={item} index={index}/>
                    }}/>
                    </ScrollView>
                    <View style={styles.viewButton}>
                            <TouchableOpacity onPress={() => navigation.navigate('ChangeNotes', {
                                notes,
                                updateData: getNotes,
                            })}>
                            <View style={styles.BackgroundButton}>
                            <Icon style={styles.iconPlus} name="plus" size ={35} color= "white" />   
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
              );
           

        }else{
            
            return (
                <SafeAreaView style={styles.Container}>
                    <View style={styles.Header}>
                        <View style={styles.Box1}><Text style={styles.TextHeader}>Notas</Text></View>
                        <View style={styles.Box2}><Icon style={styles.iconHeader} name="search" size ={30} color= "white" /></View>
                        <View style={styles.Box3}>
                            <TouchableOpacity onPress={() => navigation.navigate('ChangeNotes', {
                                notes,
                                updateData: getNotes,
                            })}>
                            <Icon style={styles.iconHearder2} name="plus" size ={35} color= "white" />   
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.line}></View>

                    <View>
                        <Image  style={styles.StackImage} source={Layers}/>
                        <Text style={styles.TextBody}> Não tem nenhuma nota aqui </Text>
                        <Text style={styles.TextBody2}> Crie notas e você poderá vê-las aqui. </Text>
                    </View> 

                    <View>
                    <View style={styles.viewButton2}>
                            <TouchableOpacity onPress={() => navigation.navigate('ChangeNotes', {
                                notes,
                                updateData: getNotes, 
                            })}>
                            <View style={styles.BackgroundButton2}>
                            <Icon style={styles.iconPlus2} name="plus" size ={35} color= "white" />   
                            </View>
                        </TouchableOpacity>
                    </View>
                    </View>

                </SafeAreaView>
            );
        }


  
};

export default Home;


