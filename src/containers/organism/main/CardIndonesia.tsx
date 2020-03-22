import React from 'react';
import {View, Text, Button} from 'react-native';
import color from '../../../config/constant/color';
import CardInfoGrid from '../../../components/card/CardInfoGrid';

const CardIndonesia = () => {
  return (
    <View
      style={{
        backgroundColor: color.blackLight,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 20,
        }}>
        Indonesia
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <CardInfoGrid color={color.yellow} status="Confirmed" value="123" />
        <CardInfoGrid color={color.teal} status="Recovered" value="123" />
        <CardInfoGrid color={color.red} status="Death" value="123" />
      </View>
      <Text
        style={{
          marginVertical: 10,
          textAlign: 'right',
          color: color.white,
        }}>
        Last Update : 2020-01-01:00:00:00
      </Text>
      <Button title="Detail" onPress={() => console.log('di klik')} />
    </View>
  );
};

export default CardIndonesia;
