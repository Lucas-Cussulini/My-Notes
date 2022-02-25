import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Notes = ({ route, updateData, note, notes, index, navigation }) => {

  const checkPriority = (note) => {
    switch(note.selectedValue){
      case '0':
        return('Prioridade não definida')
        break;
      case '1':
        return('Urgente')
        break;
      case '2': 
        return('Alta')
        break;
      case '3': 
        return('Média')
        break;
      case '4': 
        return('Baixa')
        break;
      default: return('erro!')
    }
  }
    return (
            // <View style={[{backgroundColor: checkColor(note)}, styles.container]}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('ShowNotes', {
                            note,
                            notes,
                            index,
                            updateData,
                        })}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.desc}>{note.description}</Text>
                </TouchableOpacity>
            </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: 165,
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 2,
      borderColor: '#000'
    },
    title:{
      marginTop: 15,
      marginLeft: 15,
      marginRight: 10,
      fontSize: 17,
      lineHeight: 18,
      fontWeight: 'bold',
      color: 'rgba(22, 22, 22, 0.8)',
    },

    desc: {
      marginTop: 5,
      marginLeft: 15,
      marginRight: 10,
      marginBottom: 10,
      fontSize: 14,
      lineHeight: 16,
      color: '#161616',
    },
});

export default Notes;