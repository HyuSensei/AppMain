import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Title =({children, numberOfLines = 2, size= 18,color})=>{
    return(
        <Text numberOfLines={numberOfLines}
            style={{fontWeight: 'bold', fontSize: size,color:color}}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({})
export default Title;