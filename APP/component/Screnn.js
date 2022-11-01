import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet , StatusBar, ScrollView} from 'react-native'

const Screnn =({children})=>{
    return(
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        flex: 1,
    },
   
})
export default Screnn;

