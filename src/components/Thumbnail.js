import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {windowWidth} from '../constants/Dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../state';
export default function Thumbnail({uri, isFavourite, id, currentCategory}) {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.gallery);

  const {addFavouriteAction} = bindActionCreators(actionCreators, dispatch);
  const favouriteHandler = () => {
    let modifiedCategories = categories.filter(category =>  category.id != currentCategory.id);
    currentCategory.images = currentCategory.images.map(image => {
      if (image.uri == uri) return {...image, favourite: !image.favourite};
      return image;
    });
    modifiedCategories = [...modifiedCategories,currentCategory];
    addFavouriteAction(modifiedCategories);
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: uri}} style={styles.image} />
      <Pressable style={styles.icon} onPress={() => favouriteHandler()}>
        <Icon
          name={isFavourite ? 'star' : 'star-outline'}
          color={'#000'}
          size={25}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: windowWidth * 0.3,
    height: 120,
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
  },
});
