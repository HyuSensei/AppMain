import React, { Component } from 'react'
import { Text, StyleSheet, View} from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import Videogiaitri from '../component/Videogiaitri'
import Videothoisu from '../component/Videothoisu'
import VideoYTB from '../component/VideoYTB'
const Video =()=> { 
    return (
      <ScrollView>
         <VideoYTB></VideoYTB>
         <Videothoisu></Videothoisu>
         <Videogiaitri></Videogiaitri>
      </ScrollView>
       
    )
  
}

const styles = StyleSheet.create({})
export default Video;
