import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryScreen from '../screens/CategoryScreen';
import { PRIMARY, TERTIARY } from '../constants/Color';
import FavouriteScreen from '../screens/FavouriteScreen';
const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PRIMARY,
        tabBarInactiveTintColor:'#dfdfdf',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
        name="WELCOME"
        component={CategoryScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({color, size}) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
        name="Favorite"
        component={FavouriteScreen}
      />
     
    </Tab.Navigator>
  );
}
