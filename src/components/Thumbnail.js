import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { windowWidth } from '../constants/Dimensions';

export default function Thumbnail({uri}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:uri}} style={styles.image} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:5,
    },
    image:{
        width:windowWidth*0.3,
        height:120,
        borderRadius:10,
    }
});