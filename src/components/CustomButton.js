import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { PRIMARY } from '../constants/Color';
import { FONT_SIZE_MEDIUM } from '../constants/FontSizes';

export default function CustomButton({children,style,onPress}) {
  return (
    <Pressable  style={[styles.container,style]} onPress={()=>onPress&&onPress()}>
      <Text style={styles.title}>{children}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius:10,
        backgroundColor: PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: FONT_SIZE_MEDIUM,
        textTransform: 'uppercase',
        fontWeight:'500',
    },
});