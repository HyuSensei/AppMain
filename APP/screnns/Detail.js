import React, { Component } from 'react'
import { Text, StyleSheet, View , Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Tabs from '../tab/Tabs';
const Detail =(props) => {
    const navigation = useNavigation();
    console.log(props.route.params.item.anh)
    return (
        <ScrollView style={styles.container}>
        <View style={{ left: -10, flexDirection: 'row', alignItems: 'center',height:50 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Image source={require('../img/backicon2.png')} style={{ width: 30, height: 30, top: 1,marginLeft:12 }} />
                </TouchableOpacity>
                <Image 
                    source={{uri:props.route.params.item.logo}} 
                    style={{width:100,height:30,marginLeft:90,resizeMode: 'contain'}}
                    
                />
        </View>
        <View style={{marginTop:20}}>
            <Text style={styles.text_tieu_de}>{props.route.params.item.tieu_de}</Text>
            <View style={styles.imgs}>
                <Image 
                    source={{uri:props.route.params.item.anh}} 
                    style={styles.img}
                />
                </View>
            <Text style={styles.text_noi_dung}>{props.route.params.item.noi_dung}</Text>
        </View>
        </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    
    container:{
        padding: 15,

    },
    text_tieu_de:{
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'justify'
    },
    text_noi_dung:{
        fontSize: 20,
        textAlign: 'justify',
    },
    imgs:{
        marginVertical: 30
    },
    img:{
        width: '100%',
        height: 250,
        borderRadius: 3
    }
    

})
export default Detail;