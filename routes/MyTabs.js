import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from './HomeStack';
import Favourite from '../screens/Favourite';
import Help from '../screens/Help';
import Profile from '../screens/Profile';
import {Ionicons} from '@expo/vector-icons'

const Tab = createMaterialBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator 
    activeColor="tomato"
    inactiveColor="gray"
    barStyle={{height:65}}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused,color}) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused? 'home': 'home-outline';
        } else if (route.name === 'Favourite') {
          iconName = focused ? 'heart' : 'heart-outline';
        }else if (route.name === 'Help') {
          iconName = focused ? 'help-circle' : 'help-circle-outline';
        }else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }
        return <Ionicons name={iconName} size={20} color={color} />;
      },
    })}
      
    >
      <Tab.Screen name="Home" component={HomeStack}/>
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Help" component={Help} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default MyTabs
