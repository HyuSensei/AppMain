import YoutubePlayer from "react-native-youtube-iframe";
import { Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
const Videogiaitri = () => {
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getList();
        return () => {

        }
    }, []);
    const getList = () => {
        return fetch('https://phantienhuy.000webhostapp.com/api_newspaper-main/api/baibao/Videogiaitri.php')
            .then((response) => response.json())
            .then((responseJson) => {
                setdata(responseJson);
            }
            ).catch((erro) => {
                console.log('Erro', erro);
            }).finally(() => { setisLoading(false) })
    }
    const renderItem = ({ item, index }) => (
        <View style={{ height: 700, width: '90%',  marginLeft:20,marginTop:20,marginBottom:-450 }}>
            <View style={styles.video}>
                <YoutubePlayer
                    height={700}
                    videoId={item.thumb}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 15,
                    textAlign:'justify',
                    marginTop:40

                }}  numberOfLines={2}>{item.title}</Text>
            </View>

        </View>
    )
    return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f47c59', paddingLeft: 20 }}>GIẢI TRÍ</Text>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        //horizontal
                        keyExtractor={item => `key-${item.id}`}
                    />
                )}
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:-480
    },
    contentContainer: {
        fontWeight:'bold',
        fontSize:17,
        flex: 0.65,
        paddingHorizontal: 5,
    },
    video: {
        flex: 0.35,
        marginBottom:-150,
    }
})
export default Videogiaitri;