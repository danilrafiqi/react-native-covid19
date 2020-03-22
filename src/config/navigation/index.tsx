import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../../containers/screens/Main';
import MapScreen from '../../containers/screens/Map';
import CountryScreen from '../../containers/screens/Country';

const Tab = createBottomTabNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Country" component={CountryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
