import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from '../../containers/screens/Map';
import CountryScreen from '../../containers/screens/Country';
import MainStack from './MainStack';

const Tab = createBottomTabNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainStack} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Country" component={CountryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
