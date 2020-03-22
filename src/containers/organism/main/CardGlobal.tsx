import React from 'react';
import {View} from 'react-native';
import color from '../../../config/constant/color';
import CardInfo from '../../../components/card/CardInfo';

const CardGlobal = () => {
  return (
    <View
      style={{
        backgroundColor: color.blackLight,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
      }}>
      <CardInfo color="yellow" status="Confirmed" value="123" />
      <CardInfo color="green" status="Recovered" value="123" />
      <CardInfo color="red" status="Death" value="123" />
    </View>
  );
};

export default CardGlobal;
