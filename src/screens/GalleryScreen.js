import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CustomButton from '../components/CustomButton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {actionCreators} from '../state';
import {bindActionCreators} from 'redux';
import Thumbnail from '../components/Thumbnail';
import { windowWidth } from '../constants/Dimensions';

export default function GalleryScreen({route}) {
  const {id} = route.params;
  const {categories} = useSelector(state => state.gallery);
  const dispatch = useDispatch();
  const {addImageAction} = bindActionCreators(actionCreators, dispatch);
  const currentCategory = categories.find(category => category.id === id);
  const imagePicker = async () => {
    launchImageLibrary({
      mediaType: 'photo',
    })
      .then(response => {
        // console.log(response);
        if (response.didCancel) {
          console.warn('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const payload = {
            id: currentCategory.id,
            uri: response.assets[0].uri,
          };
          addImageAction(payload);
        }

      })
      .catch(error => {
        console.warn('ImagePicker Error: ', error);
      });
  };
  const imageCapture = async () => {
    launchCamera({
      mediaType: 'photo',
    })
      .then(response => {
        if (response.didCancel) {
          console.warn('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          
          const payload = {
            id: currentCategory.id,
            uri: response.assets[0].uri,
          };
          addImageAction(payload);
        }

      })
      .catch(error => {
        console.warn('ImagePicker Error: ', error);
      });
  };
  return (
    <View
      style={[
        styles.container,
        currentCategory?.images.length == 0 && styles.noItemContainer,
      ]}>
         <FlatList
        data={currentCategory?.images}
        renderItem={({item,index})=><Thumbnail id={item.id} currentCategory={currentCategory} key={index} uri={item.uri} isFavourite={item.favourite} />}
        keyExtractor={item => item.id}
        numColumns={3}
      />
      <View style={styles.buttonContainer}>
      <CustomButton style={styles.button} onPress={() => imagePicker()}>Add Image</CustomButton>
      <CustomButton style={styles.button} onPress={() => imageCapture()}>Capture</CustomButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  noItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    width:windowWidth*0.45,
  },
  buttonContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  }
});
