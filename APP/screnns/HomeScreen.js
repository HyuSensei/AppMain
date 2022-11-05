import React, { Component,useState } from 'react'
import { View, StatusBar, Image, StyleSheet,TextInput } from 'react-native'
import SearchBar from '../component/SearchBar';
import Tinmoi from '../component/Tinmoi';
import Tonghop from '../component/Tonghop';
import Noibat from '../component/Noibat';
import { ScrollView } from 'react-native-virtualized-view';
import Combo from '../component/Combo';
const HomeScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: '#fff', paddingHorizontal: 15, flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <StatusBar
                    animated={true}
                    backgroundColor="#015f71"
                />
                <Image
                    style={{ height: 50, width: 120, marginTop: 30 }}
                    source={require('../img/logoo.png')}
                />
            </View>
            {/* <SearchBar/> */}
            {/* <View style={styles.search}>
                <TextInput style={styles.searchInput}
                
                 placeholder='Nhập Thông Tin...' />
                <Image
                    style={{ height: 30, width: 30, margin: 5 }}
                    source={require('../img/timkiem.png')}
                />
            </View> */}
            {/* <Tinmoi></Tinmoi>
            <Tonghop></Tonghop>
            <Noibat></Noibat> */}
            <Combo></Combo>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    search:{
        width: '100%',
        height: 38,
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection:'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom:20
    },
    searchInput:{
        paddingLeft: 8,
        fontSize: 14,
        // borderWidth: 2,
        // borderRadius: 10,
    }
})
export default HomeScreen;