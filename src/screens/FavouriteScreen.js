import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import { windowWidth } from '../constants/Dimensions';

export default function FavouriteScreen() {
  const {categories} = useSelector(state => state.gallery);
  let favouriteImages = [];
  categories.map(category => {
    favouriteImages = [
      ...favouriteImages,
      ...category.images.filter(image => image.favourite),
    ];
    // .map(image => {
    //   return 'helo';
    // });
  });
  return <View>
      <FlatList
        data={favouriteImages}
        renderItem={({item,index})=><Image style={styles.image} source={{uri:item.uri}} />}
        keyExtractor={item => item.id}
        numColumns={3}
      />
   </View>;
}
const styles = StyleSheet.create({
  image: {
    width: windowWidth*0.3,
    height: 120,
    borderRadius: 10,
    margin:5,
  },
});
