import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CategoryTab from '../components/CategoryTab';
import {RANDOM_COLOR, SECONDARY} from '../constants/Color';
import CustomButton from '../components/CustomButton';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../state';
export default function CategoryScreen({navigation}) {
  const {categories} = useSelector(state => state.gallery);
  const [inputVisible, setInputVisible] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const inputVisibleHandler = () => {
    setInputVisible(!inputVisible);
  };
  const dispatch = useDispatch();
  const {addCategoryAction} = bindActionCreators(actionCreators, dispatch);
  const addCategoryHandler = () => {
    setInputVisible(false);
    const payload = {
      name: category,
      id: categories.length + 1,
      images: [],
    };
    addCategoryAction(payload);
    setCategory('');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      >
      {categories.map(category => (
        <CategoryTab
          key={category.id}
          onPress={() => navigation.navigate('Gallery', {id: category.id})}
          color={'#fff'}
          title={category.name}
        />
      ))}
      {inputVisible && (
        <TextInput
          value={category}
          onChangeText={newText => setCategory(newText)}
          autoCapitalize="characters"
          style={styles.input}
          placeholder="CATEGORY"
        />
      )}
      <CustomButton
        onPress={() =>
          inputVisible ? addCategoryHandler() : inputVisibleHandler()
        }
        style={styles.button}>
        Add More Category
      </CustomButton>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    marginVertical: 10,
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
