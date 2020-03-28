import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../../containers/screens/Main';
import CountryScreen from '../../containers/screens/Country';
import color from '../constant/color';
import {Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.black,
        },
        headerTintColor: color.white,
      }}>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: 'Covid19',
          headerLeftContainerStyle: {
            marginLeft: 10,
          },
          headerLeft: () => (
            <Image
              style={{width: 40, height: 40}}
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/medcare/512/Virus-512.png',
              }}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 10,
          },
          headerRight: () => (
            <TouchableOpacity>
              <Icon name="ios-alert" size={30} color={color.white} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="IndonesianCase"
        component={CountryScreen}
        options={{
          title: 'Indonesia',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
