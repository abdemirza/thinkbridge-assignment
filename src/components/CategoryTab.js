import {  Text, StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { FONT_SIZE_LARGE } from '../constants/FontSizes';

export default function CategoryTab({title,color,onPress}) {
  return (
    <Pressable onPress={()=>onPress&&onPress()} style={[styles.container,{backgroundColor:color}]}>
      <Text style={styles.heading}>{title}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
      height:60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        marginVertical:5,
        borderWidth:1,
    },
    heading:{
        fontSize: FONT_SIZE_LARGE,
        fontWeight: '500',
        textTransform: 'uppercase',
    }
});