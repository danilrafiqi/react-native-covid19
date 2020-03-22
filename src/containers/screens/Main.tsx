import React from 'react';
import {View, Image, Button, ScrollView} from 'react-native';
import color from '../../config/constant/color';
import CardGlobal from '../organism/main/CardGlobal';
import CardIndonesia from '../organism/main/CardIndonesia';

const MainScreen = () => {
  return (
    <ScrollView style={{backgroundColor: color.black, flex: 1}}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri:
              'https://cdn3.iconfinder.com/data/icons/medcare/512/Virus-512.png',
          }}
        />
        <Button onPress={() => console.log('halo dunia')} title="abc" />
      </View>

      <CardGlobal />
      <CardIndonesia />
    </ScrollView>
  );
};
export default MainScreen;
