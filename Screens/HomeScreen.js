import * as React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default class HomeScreen extends React.Component{

    render(){
        return(
            <View>
                <TouchableOpacity style={styles.button} >
                  <Text style={styles.buttonText}>Home Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    button:{
      justifyContent : 'center',
      alignSelf : 'center',
      borderWidth : 2,
      borderRadius : 15,
      marginTop:50,
      width : 200,
      height:50,
      backgroundColor:'blue'
    },
    buttonText : {
      textAlign : 'center',
      color : 'white'
    }
  })