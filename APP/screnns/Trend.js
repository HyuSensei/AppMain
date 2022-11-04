import { Text, View, ScrollView,Image } from 'react-native'
import React, { Component } from 'react'
import Quantam from '../component/Quantam';

const Trend = () => {
  return (
    <ScrollView>
      <View style={{ width: '100%', height: 60, backgroundColor: '#015f71', justifyContent: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Xu hướng</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:20,marginLeft:10}}>
        <Image
          source={require('../img/xuhuongcon.png')}
          style={{ width: 25, height: 25, resizeMode: 'contain',tintColor:'#00ab90',marginRight:10 }}

        />
        <Text style={{ fontSize: 16, color: '#00ab90' }}>ĐANG ĐƯỢC QUAN TÂM</Text>
      </View>
      <Quantam></Quantam>
      <View style={{flexDirection:'row', marginTop:20,marginLeft:10}}>
        <Image
          source={require('../img/xuhuongcon.png')}
          style={{ width: 25, height: 25, resizeMode: 'contain',tintColor:'#00ab90',marginRight:10 }}

        />
        <Text style={{ fontSize: 16, color: '#00ab90' }}>NÓNG 24H</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:20,marginLeft:10}}>
        <Image
          source={require('../img/xuhuongcon.png')}
          style={{ width: 25, height: 25, resizeMode: 'contain',tintColor:'#00ab90',marginRight:10 }}

        />
        <Text style={{ fontSize: 16, color: '#00ab90' }}>GÓC NHÌN VÀ PHÂN TÍCH</Text>
      </View>
    </ScrollView>
  )
}
export default Trend;